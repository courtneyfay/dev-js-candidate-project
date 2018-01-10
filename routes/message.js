let Conversation = require('watson-developer-cloud/conversation/v1')

let conversation = new Conversation({
	version_date: Conversation.VERSION_DATE_2017_04_21
})

function updateMessage(input, response) {
	let result = null

	if(!response.output) {
		response.output = {}
	} else {
		return response
	}

	if (response.intents && response.intents[0]) {
		let intent = response.intents[0]
		if (intent.confidence >= 0.75) {
			result = "I understood your intent was " + intent.intent
		} else if (intent.confidence >= 0.5) {
			result = "I think your intent was " + intent.intent
		} else {
			result = "I did not understand your intent"
		}
	}

	response.output.text = result
	return response
}

let message = function(req, res) {
	let workspace = process.env.WORKSPACE_ID
	let payload = {
		workspace_id: workspace,
		context: req.body.context || {},
		input: req.body.input || {}
	}

	conversation.message(payload, function(err, data) {
		if (err) {
			return res.status(err.code || 500).json(err)
		}
		return res.json(updateMessage(payload, data))
	})
}

module.exports = message