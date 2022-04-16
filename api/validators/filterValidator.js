var allowedColumns = [
	'title',
	'description',
	'distance',
	'litre',
	'price',
	'gas_station',
	'location',
	'createdAt',
	'updatedAt'
];
var allowedOptions = ['asc', 'desc', 'ascending', 'descending'];

exports.areValidFilterOptions = function (filterColumns, filterOptions) {
	const columns = areValidValues(filterColumns, allowedColumns);
	const options = areValidValues(filterOptions, allowedOptions);
	if (columns.length > 0 || options.length > 0) {
		throw (
			'Invalid filter query params found! [' +
			columns.toString() +
			',' +
			options.toString() +
			']'
		);
	}
};

areValidValues = function (valuesToCheck, allowedValues) {
	const invalidValues = [];
	for (let i = 0; i < valuesToCheck.length; i++) {
		if (!allowedValues.includes(valuesToCheck[i])) {
			invalidValues.push(valuesToCheck[i]);
		}
	}
	return invalidValues;
};
