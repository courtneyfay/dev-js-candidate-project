let request = require('request')
const API_URL = 'http://excuses-api.herokuapp.com'

let joke = function(req, res) {
	
	let options = { 
		method: 'GET',
	  url: API_URL
	}

	request(options, (error, response, body) => {
	  if (!error && response.statusCode === 200) {
	  	let result = res.json(JSON.parse(body))

	  	console.log(JSON.parse(body))
			
			return result
		} else {
			return (response.statusCode || 500)
		}
	})
}

module.exports = joke