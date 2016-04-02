'use strict';

const express = require('express')
const bodyParser = require('body-parser')
const path = require('path')
const mongoose = require('mongoose')
const app = express()
const DatabaseModel = require('./models/list.model')

const mongo_url = 'mongodb://localhost:27017/react-intro'

app.use('/', express.static(path.join(__dirname, 'public')))
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended: true}))

app.get('/api/items', DatabaseModel.getItems)
app.post('/api/items', DatabaseModel.addItem)
app.post('/api/items/:id', DatabaseModel.updateItem)
app.delete('/api/items/:id', DatabaseModel.removeItem)

mongoose.connect(mongo_url)
const database = mongoose.connection
database.on('open', (err) => {
    if (err) throw err;
    app.listen(3000, () => {
        console.log('Listening on port 3000!')
    })
})
