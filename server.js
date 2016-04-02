'use strict';

const express = require('express')
const bodyParser = require('body-parser')
const path = require('path')
const mongoose = require('mongoose')
const app = express()
const DatabaseModel = require('./models/list.model')

const PORT = process.env.PORT || 3000;
// Connection URL
if (process.env.NODE_ENV === "production") {
	var mongo_url = `mongodb://${process.env.MONGODB_USER}:${process.env.MONGODB_PW}@${process.env.MONGODB_URL}:${process.env.MONGODB_PORT}/react-intro`;
} else {
	var mongo_url = 'mongodb://localhost:27017/react-intro';
}

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
    app.listen(PORT, () => {
        console.log('Listening on port 3000!')
    })
})
