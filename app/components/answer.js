import React, { Component } from 'react'
import Joke from './joke'

let aiStyle = {
	backgroundColor: 'blue',
	fontSize: '100px'
}

let personStyle = {
	backgroundColor: 'red',
	fontSize: '300px'
}

let divStyle = {
	backgroundColor: 'orange',
	fontSize: '5px'
}

class Answer extends Component {
	constructor(props) {
		super(props)
	}

	render() {
		const { text, who, context, attr, setMessage} = this.props

		let divStyle = who + "Style"

		return(
			<div styles={divStyle}>
				<img src={"images/avatar-" + who + ".png"} className="avatar" />
				<div className={"answer-content answer-" + who}>
					{ text === "joke" ? 
						<div className="result-joke">
							<Joke attr={attr} setMessage={setMessage} />
						</div>
						: 
						<div>
							<p dangerouslySetInnerHTML={{__html: text}}></p>
						</div> 
					}	
				</div>
			</div>
		)
	}
}

export default Answer