import React, { Component } from 'react'
import requestAPI from '../api'

class Suggest extends Component {
	constructor(props) {
		super(props)
		this.state = {}
		// this.state = {result: []}
		this.viewSynopsis = this.viewSynopsis.bind(this)
		this.loadSuggest = this.loadSuggest.bind(this)
	}

	loadSuggest(){
		let attrs = this.props.attr
		requestAPI('suggestion', 'POST', attrs).then(res => {
			this.setState({
				result: res.results
			})
		})
	}

	componentWillMount(){
		this.loadSuggest()
	}

	viewSynopsis(movie){
		console.log("hitting viewSynopsis")
		this.props.setMessage("<b>" + movie.title + ": </b>" + movie.overview, "ai")
	}

	render(){
		const {attr, setMessage} = this.props
		let results = this.state.result
		
		if (results && results.length > 0) {
			return (
				<div className="results-movies">
					{results.map((result, i) => 
						<div key={i} className="result">
							<figure className="figure-result">
								<img src={"https://image.tmdb.org/t/p/w185" + result.poster_path} />
							</figure>
							<div className="footer-result">
								<b onClick={() => this.viewSynopsis(result) }>See Synopsis</b>
							</div>
						</div>
					)}	
				</div>
			)
		} else {
			return (
				<div className="results-movies">
					<span>Loading movies...</span>
				</div>
			)
		} 	
	}
}

export default Suggest