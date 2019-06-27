'use strict';

var _fs = require('fs');

var _util = require('util');

var _path = require('path');

var _querystring = require('querystring');

var qs = _interopRequireWildcard(_querystring);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

/** 
 * 当前目录__dirname到src这个目录，..就是他的上一级，到了根目录了
 * 读取data后写进当前目录中去
*/
(0, _util.promisify)(_fs.readFile)((0, _path.resolve)(__dirname, '../package.json')).then(function (data) {
    // data = JSON.parse(data);
    console.log(data);
    (0, _fs.writeFileSync)((0, _path.resolve)(__dirname, './copypackage'), data, 'utf8');
});
//# sourceMappingURL=index.js.map