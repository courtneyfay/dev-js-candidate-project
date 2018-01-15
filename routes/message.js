let watson = require('watson-developer-cloud')

let conversation = watson.conversation({
	username: process.env.CONVERSATION_USERNAME,
	password: process.env.CONVERSATION_PASSWORD,
	version: 'v1',
	version_date: '2017-05-26'
})

function updateMessage(input, response) {
	let result = null

	if(!response.output) {
		response.output = {}
	} else {
		return response
	}

	response.output.text = result
	return response
}

let message = (req, res) => {
	let payload = {
		workspace_id: process.env.WORKSPACE_ID,
		context: req.body.context || {},
		input: req.body.input || {}
	}

	conversation.message(payload, (err, data) => {
		if (err) {
			return res.status(err.code || 500).json(err)
		}
		return res.json(updateMessage(payload, data))
	})
}

module.exports = message