const errorHandler = (error, _req, res, _next) => {
	console.error(error.message)
	return res.status(400).json({
		success: false,
		message: error.message
	})
}

module.exports = errorHandler