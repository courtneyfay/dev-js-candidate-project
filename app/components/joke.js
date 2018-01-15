import React, { Component } from 'react'
import requestAPI from '../api'

class Joke extends Component {
	constructor(props) {
		super(props)
		this.state = {}
		this.loadJoke = this.loadJoke.bind(this)
	}

	loadJoke() {
		let attrs = this.props.attr
		requestAPI('joke', 'POST', attrs).then(res => {
			result: res.excuse
		})
	}

	componentWillMount() {
		this.loadJoke()
	}

	render() {
		const {attr, setMessage} = this.props
		let result = this.state.result

		console.log("render() result: ")
		console.log(result)

		if (result && result.length > 0) {
			return (
				<div className="result-jokes">
					<span>{{result}}</span>
				</div>
			)
		} else {
			return (
				<div className="result-jokes">
					<span>Loading jokes...</span>
				</div>
			)
		}
	}
}

export default Joke