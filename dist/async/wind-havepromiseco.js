'use strict';

var _marked = /*#__PURE__*/regeneratorRuntime.mark(generator),
    _marked2 = /*#__PURE__*/regeneratorRuntime.mark(generatorco);

function generator() {
  var a, b, c;
  return regeneratorRuntime.wrap(function generator$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          _context.next = 2;
          return 1;

        case 2:
          a = _context.sent;

          console.log(a);
          _context.next = 6;
          return 2;

        case 6:
          b = _context.sent;

          console.log(b);
          _context.next = 10;
          return 3;

        case 10:
          c = _context.sent;

          console.log(c);

        case 12:
        case 'end':
          return _context.stop();
      }
    }
  }, _marked, this);
}

function nopromiseco(generator) {
  var gen = generator();
  function next(gend) {
    gend = gen.next(gend && gend.value);
    if (!gend.done) {
      next(gend);
    } else {
      return gen.value;
    }
  }
  next(gen);
}
nopromiseco(generator);

var co = require('co');

function generatorco() {
  var a, b, c;
  return regeneratorRuntime.wrap(function generatorco$(_context2) {
    while (1) {
      switch (_context2.prev = _context2.next) {
        case 0:
          _context2.next = 2;
          return { value: 1, key: 1 };

        case 2:
          a = _context2.sent;

          console.log(a);
          _context2.next = 6;
          return { value: 2, key: 1 };

        case 6:
          b = _context2.sent;

          console.log(b);
          _context2.next = 10;
          return { value: 3, key: 1 };

        case 10:
          c = _context2.sent;

          console.log(c);

        case 12:
        case 'end':
          return _context2.stop();
      }
    }
  }, _marked2, this);
}

co(generatorco);
// co(generator)
//# sourceMappingURL=wind-havepromiseco.js.map