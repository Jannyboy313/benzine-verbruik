const User = require('../models/user.js');
const auth = require('../auth.js');
const bcrypt = require('bcryptjs');

exports.login = async (req, res) => {
	const email = req.body.email;
	const password = req.body.password;
	User.findOne({ email: email })
		.then(async user => {
			const isEqual = await bcrypt.compare(password, user.password);

			if (isEqual) {
				const [accesstoken, refreshToken] = auth.createTokens(user);
				res.cookie('access-token', accesstoken, {
					maxAge: 60 * 60 * 24 * 7 * 1000,
					httpOnly: true,
					secure: false
				});
				res.cookie('refresh-token', refreshToken, {
					maxAge: 60 * 60 * 24 * 7 * 1000,
					httpOnly: true,
					secure: false
				});
				user.password = null;
				return res.status(200).json(user);
			} else {
				return res
					.status(401)
					.json({ message: 'Email or password incorrect' });
			}
		})
		.catch(() => {
			return res
				.status(401)
				.json({ message: 'Email or password incorrect' });
		});
};

exports.logout = (req, res) => {
	res.clearCookie('access-token');
	res.clearCookie('refresh-token');
	return res.status(201).send({ message: 'Successfully logged out!' });
};

// Creating a new user and giving tokens for authentication
exports.register = async (req, res) => {
	req.body.password = await bcrypt.hash(req.body.password, 12);
	const user = new User(req.body);

	user.save()
		.then(result => {
			const [accesstoken, refreshToken] = auth.createTokens(result);
			res.cookie('access-token', accesstoken, {
				maxAge: 60 * 60 * 24 * 7 * 1000,
				httpOnly: true,
				secure: true
			});
			res.cookie('refresh-token', refreshToken, {
				maxAge: 60 * 60 * 24 * 7 * 1000,
				httpOnly: true,
				secure: true
			});
			result.password = null;
			res.status(201).send(result);
		})
		.catch(err => {
			const status = err.statusCode || 500;
			res.status(status).json({ message: err });
		});
};

exports.getUser = (req, res) => {
	const id = req.params.id;
	User.findById(id)
		.select('-password')
		.then(result => {
			res.status(200).send(result);
		})
		.catch(err => {
			const status = err.statusCode || 500;
			res.status(status).json({ message: err });
		});
};
