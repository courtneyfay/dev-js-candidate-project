require('dotenv').config()

let server = require('./app.js')
let port = process.env.PORT || 3000

server.listen(port, (err) => {
	if (err) throw err
	console.log(`Server running on port: ${port}`)
})