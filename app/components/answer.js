import React, { Component } from 'react'
import Suggest from './suggest'

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
					<div>
						<span dangerouslySetInnerHTML={{__html: text}}></span>
					</div>
				</div>
				<Suggest attr={attr} setMessage={setMessage} />
			</div>
		)
	}
}

export default Answer