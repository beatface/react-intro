"use strict";

const mongoose = require('mongoose');

const ToDos = mongoose.model('items', mongoose.Schema({
    item: String,
    completed: Boolean
}));

// module.exports.model = ToDos;


module.exports.getItems = (req, res) => {
    ToDos.find((err, items) => {
        if (err) throw err;
        console.log(items);
        res.send(items);
    })
};

module.exports.addItem = (req, res) => {
    // assign user id to params to save to object in database
    ToDos.create(req.params, (err) => {
        if (err) throw err;
        res.send('Success! Item saved.');
    });
};
