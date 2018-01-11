import React, { Component } from 'react'
import requestAPI from '../api'

class Suggest extends Component {
	constructor(props) {
		super(props)
		this.state = {result: []}
		this.viewSynopsis = this.viewSynopsis.bind(this)
		this.loadSuggest = this.loadSuggest.bind(this)
	}

	loadSuggest(){
		console.log("hitting loadSuggest")
		let attrs = this.props.attr
		console.log(attrs)
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
		const {setMessage} = this.props
		console.log("suggest.js render()")
		console.log(this.state.result)
		return(
			<div className="results-movies">
				{this.state.result && this.state.result.length ? this.state.result.map((movie, i) => {
					<div key={i} className="result">
						<figure className="figure-result">
							<img src={"https://image.tmdb.org/t/p/w185" + movie.poster_path} />
						</figure>
						<div className="footer-result">
							<b onClick={() => this.viewSynopsis(movie) }>See Synopsis</b>
						</div>
					</div>
				}): null}
			</div>
		) 	
	}
}

export default Suggest