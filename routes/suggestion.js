let request = require('request')
let genres = require('../genres')

const API_URL = 'https://api.themoviedb.org/3/discover/movie'
const API_KEY = process.env.API_TMDB_KEY
const API_LANG = process.env.API_TMDB_LANG

let suggestion = function(req, res) {
	let url = `${API_URL}?sort_by=popularity.desc&language=${API_LANG}&api_key=${API_KEY}`

	if (req.body.genre) {
		let genre = genres.filter(genre => genre.name === req.body.genre)
		if (genre && genre.length) {
			url += "&with_genres=" + genre[0].id
		}
	}

	request({
		uri: url,
		method: 'GET'
	}), function (error, response, body) {
		if (!error && response.statusCode == 200) {
			return res.json(JSON.parse(body))
		} else {
			return res.status(error.code || 500).json(error)
		}
	}
}

module.exports = suggestion