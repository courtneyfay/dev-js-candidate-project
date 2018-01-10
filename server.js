const express = require('express')
const App = require('./app.js')

const app = express()

app.use('/', App);

app.listen(3000, (err) => {
	if (err) throw err
	console.log('> Ready on http://localhost:3000')
})