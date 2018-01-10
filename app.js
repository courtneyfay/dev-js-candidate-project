let express = require('express')
let bodyParser = require('body-parser')
let message = require('./routes/message')
let suggestion = require('./routes/suggestion')
let app = express()

app.use(express.static('./public'))
app.use(bodyParser.json())

//ROUTES
app.post('/api/message', message)
app.post('/api/suggestion', suggestion)

module.exports = app