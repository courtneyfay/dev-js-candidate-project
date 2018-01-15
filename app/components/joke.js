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
			this.setState({
				result: res.excuse
			})
		})
	}

	componentWillMount() {
		this.loadJoke()
	}

	render() {
		const {attr, setMessage} = this.props
		let result = this.state.result

		if (result && result.length > 0) {
			return (
				<div className="result-jokes">
					<p>{result}</p>
				</div>
			)
		} else {
			return (
				<div className="result-jokes">
					<p>Loading jokes...</p>
				</div>
			)
		}
	}
}

export default Joke