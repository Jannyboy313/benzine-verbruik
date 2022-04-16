var allowedColumns = ['title', 'description', 'distance', 'litre', 'price', 'gas_station', 'location', 'createdAt', 'updatedAt'];
var allowedOptions = ['asc', 'desc', 'ascending', 'descending'];

exports.areValidFilterOptions = function (filterColumns, filterOptions) {
    const columns = areValidValues(filterColumns, allowedColumns);
    const options = areValidValues(filterOptions, allowedOptions);
    return columns && options;
}

areValidValues = function (valuesToCheck, allowedValues) {
    for (let i = 0; i < valuesToCheck.length; i++) {
		if (!allowedValues.includes(valuesToCheck[i])) {
			return false;
		}
	}
    return true
}