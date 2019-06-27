'use strict';

var _marked = /*#__PURE__*/regeneratorRuntime.mark(iterator);

function iterator(arr) {
    var i;
    return regeneratorRuntime.wrap(function iterator$(_context) {
        while (1) {
            switch (_context.prev = _context.next) {
                case 0:
                    i = 0;

                case 1:
                    if (!(i < arr.length)) {
                        _context.next = 7;
                        break;
                    }

                    _context.next = 4;
                    return arr[i];

                case 4:
                    i++;
                    _context.next = 1;
                    break;

                case 7:
                case 'end':
                    return _context.stop();
            }
        }
    }, _marked, this);
}

var gen = iterator(['test1', 'test2', 'test3']);

console.log("第一个yield", gen.next());
console.log("第二个yield", gen.next());
console.log("第三个yield", gen.next());
//# sourceMappingURL=wind-iterator.js.map