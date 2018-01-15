let express = require('express')
let bodyParser = require('body-parser')
let message = require('./routes/message')
let joke = require('./routes/joke')
let app = express()

app.use(express.static('./public'))
app.use(bodyParser.json())

//ROUTES
app.post('/api/message', message)
app.post('/api/joke', joke)

module.exports = app