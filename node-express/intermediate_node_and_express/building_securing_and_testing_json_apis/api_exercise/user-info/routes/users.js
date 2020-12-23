require('dotenv').config();
const express = require('express');
const router = express.Router();
const db = require('../db');
const bcrypt = require('bcrypt');
const jsonwebtoken = require('jsonwebtoken');

const secret = process.env.SECRET_KEY;

router.get('/', async (req, res, next) => {
    try {
        const result = await db.query("SELECT * FROM users"); 
        return res.json(result.rows);
    } catch(e) {
        return next(e);
    }
});

router.get('/:id', async (req, res, next) => {
    try {
        const result = await db.query("SELECT * FROM users WHERE id=$1 AND isAdmin = TRUE", [
            req.params.id
        ]);
        if(result.rows.length === 0) {
            return res.status(400).json({ message: "User not found" });
        }
        return res.json(result.rows[0]);
    } catch(e) {
        return next(e);
    }
});

router.post('/', async (req, res, next) => {
    try {
        const hashedPassword = await bcrypt.hash(req.body.password, 10);
        const result = await db.query(
            "INSERT INTO users (username,password,isAdmin) VALUES ($1,$2,$3) RETURNING *",
            [req.body.username, hashedPassword, req.body.isAdmin]
        );
        return res.status(201).json(result.rows[0]);
    } catch(e) {
        return next(e);
    }
});

router.post('/login', async (req, res, next) => {
    try {
        const foundUser = await db.query(
            "SELECT * FROM users WHERE username=$1 LIMIT 1",
            [req.body.username]
        );
        if(foundUser.rows.length === 0) {
            return res.status(400).json({ message: "Invalid username" });
        }
        const hashedPassword = await bcrypt.compare(
            req.body.password,
            foundUser.rows[0].password
        );
        if(hashedPassword === false) {
            return res.status(400).json({ message: "Invalid password" });
        }
        const token = jsonwebtoken.sign(
            { username: foundUser.rows[0].username },
            secret,
            { expiresIn: 60 * 60 }
        );
        return res.json({ token });
    } catch(e) {
        return next(e);
    }
});

router.patch('/:id', async (req, res, next) => {
    try {
        const hashedPassword = await bcrypt.hash(req.body.password, 10);
        const result = await db.query(
            "UPDATE users SET username=$1, password=$2 WHERE id=$3 AND isAdmin = TRUE RETURNING *",
            [req.body.username, hashedPassword, req.params.id]
        );
        return res.status(200).json(result.rows[0]);
    } catch(e) {
        return next(e);
    }
});

router.delete('/:id', async (req, res, next) => {
    try {
        const result = await db.query("DELETE FROM users WHERE id=$1 AND isAdmin = TRUE", [
            req.params.id
        ]);
        return res.status(204).json({ message: "Deleted" });
    } catch(e) {
        return next(e);
    }
});

module.exports = router;
