exports.validateName = function(name) {
    var regex = /^([ \u00c0-\u01ffa-zA-Z'\-])+$/;
    return regex.test(name)
};