'use strict';

const express = require('express')
const bodyParser = require('body-parser')
const path = require('path')
const app = express()

app.use('/', express.static(path.join(__dirname, 'public')))
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended: true}))

app.get('/api/todo', (req, res) => {
    console.log(req.body)
    res.send('trying to get the notes')
})

app.post('/api/todo', (req, res) => {
    console.log(req.body)
    res.send('trying to send the notes')
})

app.listen(3000, () => {
    console.log('Listening on port 3000!');
})
