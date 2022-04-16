var allowedColumns = ['title', 'description', 'distance', 'litre', 'price', 'gas_station', 'location', 'createdAt', 'updatedAt'];
var allowedConfig = ['asc', 'desc', 'ascending', 'descending'];

exports.areValidFilterOptions = function (filterColumns, filterConfigs) {
    const columns = areValidValues(filterColumns, allowedColumns);
    const configs = areValidValues(filterConfigs, allowedConfig);
    return (!columns || !configs) ? false : true;
}

areValidValues = function (valuesToCheck, allowedValues) {
    for (let i = 0; i < valuesToCheck.length; i++) {
		if (allowedValues.includes(valuesToCheck[i])) {
			return false;
		}
	}
    return true
}