'use strict';

/** 
 * async await 模式
*/
var init = function () {
    var _ref = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
        var data;
        return regeneratorRuntime.wrap(function _callee$(_context2) {
            while (1) {
                switch (_context2.prev = _context2.next) {
                    case 0:
                        _context2.next = 2;
                        return readAsync('./package.json');

                    case 2:
                        data = _context2.sent;

                        console.log(JSON.parse(data));

                    case 4:
                    case 'end':
                        return _context2.stop();
                }
            }
        }, _callee, this);
    }));

    return function init() {
        return _ref.apply(this, arguments);
    };
}();

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

var _marked = /*#__PURE__*/regeneratorRuntime.mark(getContent);

/** 
 * 传统的回调模式
*/
var fs = require('fs');

fs.readFile('./package.json', function (err, data) {
    console.log(data);
    return JSON.parse(data);
});

/**
 *  promise 模式
*/
var util = require('util');
var readAsync = util.promisify(fs.readFile);

readAsync('./package.json').then(function (data) {
    console.log(data);
    return JSON.parse(data);
}).catch(function (err) {
    console.log(err);
});

/** 
 * co 模式
*/
var co = require('co');
var fetch = require('node-fetch');

function getContent() {
    var res, movie;
    return regeneratorRuntime.wrap(function getContent$(_context) {
        while (1) {
            switch (_context.prev = _context.next) {
                case 0:
                    _context.next = 2;
                    return fetch('https://api.apiopen.top/todayVideo');

                case 2:
                    res = _context.sent;
                    _context.next = 5;
                    return res.json();

                case 5:
                    movie = _context.sent;

                    console.log(movie);

                case 7:
                case 'end':
                    return _context.stop();
            }
        }
    }, _marked, this);
}
co(getContent);
init();

/** 
 * anync await 模式是co的语法糖，
 * co库利用generator方法，yield指令，next传参，实现自动化执行
 * 利用promise实现每步执行都返回一个promise对象
 * co库的执行，yield语句后面全是promise对象，通过.then().then()....进行链式操作
 * async await await后可以传是符串，数字，当是字符串和数字的时候其实是同步进行的，co操作没有同步，不支持字符串和数字
 * async await 更适合异步请求的业务场景，co库除了异步场景还有自动化流程处理等潜在作用
*/
//# sourceMappingURL=async.js.map