module.exports = (req, res, next) => {
    req.body.user = req.locals.user._id;
    next();
}