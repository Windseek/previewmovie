'use strict';

var _marked = /*#__PURE__*/regeneratorRuntime.mark(getContent);

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
//# sourceMappingURL=wind-co.js.map