/* eslint-disable no-useless-escape */
exports.validateEmail = function (email) {
	var regex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
	return regex.test(email);
};
