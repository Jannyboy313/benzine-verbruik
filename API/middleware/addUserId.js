module.exports = (req, res, next) => {
	req.body.user = res.locals.user._id;
	next();
};
