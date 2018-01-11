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

	console.log(url)

	request({
		uri: url,
		method: 'GET'
	}), function (error, response, body) {
		if (!error && response.statusCode == 200) {
			let newBody = JSON.parse(body)
			console.log(newBody)
			return res.json(JSON.parse(body))
		} else {
			console.log("not great")
			return res.status(error.code || 500).json(error)
		}
	}
}

/*
var request = require("request");

var options = { method: 'GET',
  url: 'https://api.themoviedb.org/3/discover/movie',
  qs: 
   { sort_by: 'popularity.desc',
     language: 'en-EN',
     api_key: '42209e536e1b483f12ac552a3d863426',
     with_genres: '18' },
  headers: 
   { 'postman-token': 'ea2bb9ee-4469-30d7-6948-f7c71c78ec0b',
     'cache-control': 'no-cache' } };

request(options, function (error, response, body) {
  if (error) throw new Error(error);

  console.log(body);
});
*/

module.exports = suggestion