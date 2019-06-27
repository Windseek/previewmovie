'use strict';

var fs = require('fs');

fs.readFile('./package.json', function (err, data) {
    console.log(JSON.parse(data));
});
//# sourceMappingURL=wind-callback.js.map