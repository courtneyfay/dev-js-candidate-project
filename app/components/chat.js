import React, { Component } from 'react'
import Answer from './answer'
import requestAPI from '../api'

class Chat extends Component {
	constructor(props){
		super(props)
		this.state = {context: {}, messages: []}
		this.submitMessage = this.submitMessage.bind(this)
		this.submitInput = this.submitInput.bind(this)
		this.setMessage = this.setMessage.bind(this)
	}

	setMessage(text, who = "person", attr = {}) {
		console.log(text)
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
			let answer = "Please, repeat your question."

			if (res.output.text.length) {
				if (res.output.text[0]) {
					answer = res.output.text[0]
				} else if (res.output.text[1]) {
					answer = res.output.text[1]
				}
			}

			//let answer = res.output.text[0] ? res.output.text[0] : res.output.text[1] ? res.output.text[1] : "Please, repeat your question"
		
			let attr = {genre: 'Drama'} //res.context.genre ? : {}

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
				<div className="answers" id="answers">
					{this.state.messages && this.state.messages.length ? this.state.messages.map((msg, i) => 
						<Answer key={i} text={msg.text} who={msg.who} attr={msg.attr}
						context={this.state.context} setMessage={this.setMessage} />
					) : null}
				</div>
				<div>
					<input type="text" className="input-question" placeholder="Write something here..."
						onKeyPress={this.submitInput} />
				</div>
			</div>
		)
	}
}

export default Chat