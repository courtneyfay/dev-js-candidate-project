import React, { Component } from 'react'
import Joke from './joke'

const divStyle = {
	alignItems: 'center',
	backgroundColor: 'orange',
	borderRadius: '1.25rem',
	color: 'black',
	display: 'flex',
	margin: '0.25rem',
	justifyContent: 'flex-start'
}

const imgStyle = {
	height: '30px',
	margin: '0 0.50rem'
}

const pStyle = {}

class Answer extends Component {
	constructor(props) {
		super(props)
		this.setStyle = this.setStyle.bind(this)
	}

	setStyle(who) {
		if (who === "ai") {
			divStyle.backgroundColor = '#F1F0F0', //grey background
			divStyle.color = '#000', //black text
			divStyle.justifyContent = 'flex-start'
		} else {
			divStyle.backgroundColor = '#0078FF', //blue background
			divStyle.color = '#FFF', //white text
			divStyle.justifyContent = 'flex-end',
			pStyle.marginRight = '0.50rem'
		}
	}

	componentWillMount() {
		this.setStyle(this.props.who)
	}

	render() {
		const { text, who, context, attr, setMessage} = this.props

		return(
			<div style={divStyle}>
				<img src={"images/avatar-" + who + ".png"} style={imgStyle} />
				{ text === "1988" ? 
					<div>
						<Joke attr={attr} setMessage={setMessage} />
					</div>
					: 
					<div>
						<p style={pStyle} dangerouslySetInnerHTML={{__html: text}}></p>
					</div> 
				}
			</div>
		)
	}
}

export default Answer