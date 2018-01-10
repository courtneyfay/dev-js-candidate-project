let express = require('express')
let bodyParser = require('body-parser')

let app = express()

app.use(express.static('./public'))
app.use(bodyParser.json())

//COMMENT THIS BACK IN!!
let message = require('./routes/message')
app.post('/api/message', message)

let suggestion = require('./routes/suggestion')
app.post('/api/suggestion', suggestion)

module.exports = app