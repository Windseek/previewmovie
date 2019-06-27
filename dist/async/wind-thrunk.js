"use strict";

var _marked = /*#__PURE__*/regeneratorRuntime.mark(gen);

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

function thunkify(fn) {
    return function () {
        var args = Array.from(arguments);
        return function (callback) {
            var called = void 0;
            var proxyCallBack = function proxyCallBack() {
                if (called) {
                    return;
                }
                called = true;
                callback.apply(null, Array.from(arguments));
            };
            var wholeArgs = [].concat(_toConsumableArray(args), [proxyCallBack]);
            try {
                return fn.apply(this, wholeArgs);
            } catch (err) {
                callback(err);
            }
        };
    };
}

function demo(arg, next) {
    console.log("demo" + arg + " done");
    next();
}

var fnThunk = thunkify(demo);

//执行器生产函数
function gen() {
    return regeneratorRuntime.wrap(function gen$(_context) {
        while (1) {
            switch (_context.prev = _context.next) {
                case 0:
                    _context.next = 2;
                    return fnThunk(1);

                case 2:
                    _context.next = 4;
                    return fnThunk(2);

                case 4:
                case "end":
                    return _context.stop();
            }
        }
    }, _marked, this);
}

//执行器
function run(g) {
    var genInstance = g();
    var next = function next() {
        var res = genInstance.next();
        if (!res || res.done) return;
        //next 就是res.value的callback回调函数，当res.value执行完之后会进入next，从而进入下个yield
        res.value(next);
    };
    next();
}

run(gen);
//# sourceMappingURL=wind-thrunk.js.map