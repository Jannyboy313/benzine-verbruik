module.exports = (req, res, next) => {
	// req.body.user = res.locals.user._id;
	req.body.user = '624b515c055ab86bf37219f1';
	next();
};
