import React, { Component } from 'react'
import Joke from './joke'

const divStyle = {
	alignItems: 'center',
	backgroundColor: 'orange',
	borderBottomRightRadius: '0',
	borderRadius: '1.25rem',
	display: 'flex',
	margin: '0.25rem'
}

const aiStyle = {
	backgroundColor: 'blue'
}

const personStyle = {
	backgroundColor: 'red'
}

const imgStyle = {
	height: '30px',
	margin: '0 0.50rem'
}

class Answer extends Component {
	constructor(props) {
		super(props)
		this.state = {style: {}}
		this.setStyle = this.setStyle.bind(this)
	}

	setStyle(who) {
		if (who === "ai") {
			this.setState({
				style: aiStyle
			})
		} else {
			this.setState({
				style: personStyle
			})
		}
	
		console.log("setStyle(): ")
		console.log(this.state.style)
	}

	componentWillMount() {
		this.setStyle(this.props.who)
	}

	render() {
		const { text, who, context, attr, setMessage} = this.props	
		let style = this.state.style

		return(
			<div style={divStyle}>
				<div style={style}>
					<img src={"images/avatar-" + who + ".png"} style={imgStyle} />
					{ text === "joke" ? 
						<div>
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