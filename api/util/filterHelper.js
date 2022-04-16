const filter = require('../validators/filterValidator.js');

exports.getFilterOptions = function(queries) {
    if (!queries.filter) {
        return { updatedAt: 'desc' };
    }
    const filterQueries = [];
    const filterData = {
        columns: [],
        options: []
    };

    const [queriesObject, queriesArray] = getSanitizedQueries(queries);
    queriesArray.forEach(element => {
		filterQueries.push(element);
		filterData.columns.push(element[0]);
		filterData.options.push(element[1]);
	});

    try {
        filter.areValidFilterOptions(
            filterData.columns,
            filterData.options
        );
    } catch (error) {
        throw error;
    }
}

const getSanitizedQueries = queries => {
	delete queries['page'];
	delete queries['filter'];
	return [queries, Object.entries(queries)]; //Json & Json -> key-value array
};
