module.exports = (function () {
    'use strict';
    var Yadda = require('yadda'),
        English = Yadda.localisation.English,
        Dictionary = Yadda.Dictionary,
        dictionary = new Dictionary()
            .define('title', /([^"]*)/)
            .define('body', /([^"]*)/)
            .define('number', /(\d+)/);

    return English.library(dictionary);
}());
