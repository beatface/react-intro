"use strict";

const mongoose = require('mongoose');

const ToDos = mongoose.model('items', mongoose.Schema({
    item: String,
    completed: Boolean
}))


module.exports.getItems = (req, res) => {
    ToDos.find((err, items) => {
        if (err) throw err
        console.log(items)
        res.send(items)
    })
}

module.exports.addItem = (req, res) => {
    ToDos.create(req.body, (err) => {
        if (err) throw err
        res.send('Success! Item saved.')
    })
}

module.exports.updateItem = (req, res) => {
    ToDos.findByIdAndUpdate(req.params.id, {item: req.body.item, completed: req.body.completed}, (err) => {
        if (err) throw err
        res.send('Success! Item updated.')
    })
}

module.exports.removeItem = (req, res) => {
    ToDos.remove({_id: req.params.id}, (err) => {
        if (err) throw err
        res.send('Delete successful!')
    })
}
