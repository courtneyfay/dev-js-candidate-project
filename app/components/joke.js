import React, { Component } from 'react'
import requestAPI from '../api'

/*.result-jokes {
  position: relative;
  font-size: 1rem;
  color: #fff;
  letter-spacing: 0.015rem;
  line-height: 1.3125rem;
  background: #00B4A0;
  border-radius: 1.25rem;
  border-bottom-right-radius: 0;
  text-align: left;
  display: inline-block;
  margin-left: 2.5rem;
  min-width: 2.5rem;
}*/

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