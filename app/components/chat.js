import React, { Component } from 'react'
import Answer from './answer'
import requestAPI from '../api'

const answerStyle = {
	fontFamily: 'sans-serif',
	fontSize: '1rem',
	height: 'calc(100% - 4rem)',
	margin: '0 auto',
	overflowY: 'auto',
	overflowX: 'hidden',
	width: '70%'
}

const divStyle = {
	margin: '0 auto',
	width: '70%'
}

const inputStyle = {
	border: 'none',
	borderBottom: '1px solid black',
	background: 'transparent',
	color: '#323232',
	fontSize: '1rem',
	height: '2.5rem',
	marginBottom: '-0.125rem',
	outline: 'none',
	paddingLeft: '0.125rem',
	width: '100%'
}

class Chat extends Component {
	constructor(props){
		super(props)
		this.state = {context: {}, messages: []}
		this.submitMessage = this.submitMessage.bind(this)
		this.submitInput = this.submitInput.bind(this)
		this.setMessage = this.setMessage.bind(this)
	}

	setMessage(text, who = "person", attr = {}) {
		let answer = {text: text, who: who, attr: attr}
		this.setState({
			messages: [...this.state.messages, answer]
		})
	}

	scrollAnswer() {
		let answers = document.getElementById("answers")
		answers.scrollTop = answers.scrollHeight
	}

	submitMessage(text, context) {
		let parameters = {}

		if (text) {
			parameters.input = {text: text}
		}

		if (context) {
			parameters.context = context
		}

		requestAPI("message", "POST", parameters).then(res => {
			let jokeNode = "node_3_1515559528388"
			let answer = res.output.text[0]
			let attr = {}
			
			if (res.output.nodes_visited[0] === jokeNode) {
				answer = "1988"
			}

			this.setMessage(answer, "ai", attr)
			this.setState({context: res.context})
		}).then(() => {
			this.scrollAnswer()
		})
	}

	submitInput(e) {
		let text = e.target.value

		if (e.key === 'Enter' && text) {
			this.setMessage(text)
			this.scrollAnswer()
			this.submitMessage(text, this.state.context)
			e.target.value = ""
		}
	}

	componentWillMount() {
		this.submitMessage(null, null)
	}

	render() {
		return(
			<div>
				<div style={answerStyle} id="answers">
					{this.state.messages && this.state.messages.length ? this.state.messages.map((msg, i) => 
						<Answer key={i} text={msg.text} who={msg.who} attr={msg.attr} context={this.state.context} setMessage={this.setMessage} />
					) : null}
				</div>
				<div style={divStyle}>
					<input autoFocus type="text" style={inputStyle} placeholder="Type something..."
						onKeyPress={this.submitInput} />
				</div>
			</div>
		)
	}
}

export default Chat