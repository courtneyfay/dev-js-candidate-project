import React, { Component } from 'react'
import Joke from './joke'

const divStyle = {
	backgroundColor: 'orange',
	borderBottomRightRadius: '0',
	borderRadius: '1.25rem',
	display: 'flex',
	margin: '0.25rem'
}

const imgStyle = {
	height: '30px',
	margin: '0.25rem',
	verticalAlign: 'text-bottom'
}

const aiStyle = {
	backgroundColor: 'blue',
	fontSize: '100px'
}

const personStyle = {
	backgroundColor: 'red',
	fontSize: '300px'
}

class Answer extends Component {
	constructor(props) {
		super(props)
		// this.state = {style: {}}
		// this.setStyle = this.setStyle.bind(this)
	}

	// setStyle(who) {
	// 	let style = who + 'Style'
	// 	console.log("setStyle style:")
	// 	console.log(style)

	// 	this.setState({
	// 		style: styles.style
	// 	})

	// 	console.log("setStyle(): ")
	// 	console.log(this.state.style)
	// }

	// componentWillMount() {
		// this.setStyle(this.props.who)
	// }

	render() {
		const { text, who, context, attr, setMessage} = this.props	
		// let style = this.state.style

		return(
			<div style={divStyle}>
				<img src={"images/avatar-" + who + ".png"} style={imgStyle} />
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