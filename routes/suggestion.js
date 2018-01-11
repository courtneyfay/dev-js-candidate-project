let request = require("request")
let genres = require('../genres')

const API_URL = 'https://api.themoviedb.org/3/discover/movie'
const API_KEY = process.env.API_TMDB_KEY
let API_GENRE = ''

let suggestion = function(req, res) {

	if (req.body.genre) {
		let genre = genres.filter(genre => genre.name === req.body.genre)
		if (genre && genre.length) {
			API_GENRE = genre[0].id
		}
	}

	let options = {
		method: 'GET',
		url: API_URL,
		qs: {
			sort_by: 'popularity.desc',
			language: 'en-EN',
			api_key: API_KEY,
			with_genres: API_GENRE
		},
	}

	request(options, function (error, response, body) {
		if (!error && response.statusCode === 200) {
			return res.json(JSON.parse(body))
		} else {
			return (response.statusCode || 500)
		}
	})
}

module.exports = suggestion