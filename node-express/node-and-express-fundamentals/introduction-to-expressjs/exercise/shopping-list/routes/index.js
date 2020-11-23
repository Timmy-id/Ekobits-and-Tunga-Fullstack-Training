const express = require('express');

const router = express.Router();

const items = [];
var id = 1;

router
    .route('')
    .get((req, res) => {
        return res.json(items);
    })
    .post((req, res) => {
        items.push({
            name: req.body.name,
            price: req.body.price,
            id: ++id
        });
        return res.json({ message: 'List Created' });
    });

router
    .route('/:id')
    .get((req, res) => {
        const item = items.find(val => val.id === Number(req.params.id));
        return res.json(item);
    })
    .patch((req, res) => {
        const item = items.find(val => val.id === Number(req.params.id));
        item.name = req.body.name;
        item.price = req.body.price;
        return res.json({ message: 'List Updated' });
    })
    .delete((req, res) => {
        const itemIndex = items.findIndex(val => val.id === Number(req.params.id));
        items.splice(itemIndex, 1);
        return res.json({ message: 'Deleted' });
    });

module.exports = router;
