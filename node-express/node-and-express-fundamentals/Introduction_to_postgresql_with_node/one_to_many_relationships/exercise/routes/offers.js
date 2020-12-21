const express = require('express');
const app = express();
const router = express.Router({ mergeParams: true });
const db = require('../db');

app.get('/graduates/:id/offers', async (req, res, next) => {
    try {
        const graduate = await db.query("SELECT * FROM graduates WHERE id=$1", [
            req.params.id
        ]);

        const offers = await db.query(
            "SELECT company,title FROM offers WHERE graduate_id=$1", 
            [req.params.id]
        );
        graduate.rows[0].offers = offers.rows;
        return res.json(graduate.rows[0]);
    } catch(e) {
        return next(e);
    }
});

app.post('/graduates/:id/offers', async (req, res, next) => {
    try {
        const graduate = await db.query(
            "INSERT INTO offers (company, title, graduate_id) VALUES ($1, $2, $3)",
            [req.body.company, req.body.title, req.params.id]
        );
        return res.json({ message: "Created" });
    } catch(e) {
        return next(e);
    }
});

app.get('/graduates/:graduate_id/offers/:id', async(req, res, next) => {
    try {
        const offer = await db.query("SELECT title FROM offers WHERE graduate_id=$1 AND id=$2", [graduate_id, id]);
        res.json(offer.rows)
    } catch(e) {
        return next(e);
    }
});

app.patch('/graduates/:graduate_id/offers/:id', async(req, res, next) => {
    try {
        const offer = await db.query(
            "UPDATE offers SET title=$1 WHERE graduate_id=$2 AND id=$3", 
            [req.body.title, graduate_id, id]
        );
        res.json(offer.rows);
    } catch(e) {
        return next(e);
    }
});

app.delete('/graduates/:graduate_id/offers/:id', async(req, res, next) => {
    try {
        const offer = await db.query("DELETE FROM offers WHERE graduate_id=$1 AND id=$2", [graduate_id, id]);
        res.json({ message: "Deleted" });
    } catch (e) {
        return next(e);
    }
})

module.exports = router;
