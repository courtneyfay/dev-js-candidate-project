import React, { Component } from 'react'
import Joke from './joke'

class Answer extends Component {
	constructor(props) {
		super(props)
	}

	render() {
		const { text, who, context, attr, setMessage} = this.props

		return(
			<div className={"answer _answer-" + who}>
				<img src={"images/avatar-" + who + ".png"} className="avatar" />
				<div className={"answer-content answer-" + who}>
					{ text === "joke" ? 
						<div className="result-joke">
							<Joke attr={attr} setMessage={setMessage} />
						</div>
						: 
						<div>
							<span dangerouslySetInnerHTML={{__html: text}}></span>
						</div> 
					}	
				</div>
			</div>
		)
	}
}

export default Answer