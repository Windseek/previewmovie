'use strict';

var fs = require('fs');
var util = require('util');
var readAsync = util.promisify(fs.readFile);

var res = readAsync('./package.json').then(function (data) {
    console.log(data);
    return JSON.parse(data);
}).catch(function (err) {
    console.log(err);
});
setTimeout(function () {
    console.log(res.name);
}, 10000);
//# sourceMappingURL=wind-promise.js.map