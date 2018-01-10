import React, { Component } from 'react'
import Suggest from './suggest'

class Answer extends Component {
	constructor(props) {
		super(props)
		this.state = {translate: ""}
		this.setTranslate = this.setTranslate.bind(this)
	}

	setTranslate(result) {
		this.setState({
			translate: result
		})
	}

	render() {
		const { text, who, context, attr, setMessage} = this.props
		return(
			<div className={"answer _answer-" + who}>
				<img src={"images/avatar-" + who + ".png"} className="avatar" />
				<div className={"answer-content answer-" + who}>
					<div>
						<span dangerouslySetInnerHTML={{__html: text}}></span>
						{this.state.translate ? <i>{this.state.translate}</i> : null}
					</div>
				</div>
				{who === "ai" && !this.state.translate ?
					<Translate setTranslate={this.setTranslate} text={text} />
				: null}
				{attr.genre ?
					<Suggest attr={attr} setMessage={setMessage} />
				: null}
			</div>
		)
	}
}

export default Answer