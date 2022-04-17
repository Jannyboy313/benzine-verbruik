exports.getPageInformation = function (queries) {
	let { page } = queries;

	if (!page) page = 0;

	const limit = 5;
	const skip = page * limit;

	return { page: page, limit: limit, skip: skip };
};
