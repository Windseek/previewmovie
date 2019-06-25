function *generator() {
    let a = yield 1
    console.log(a);
    let b = yield 2
    console.log(b);
    let c = yield 3
    console.log(c);
  }
  
  function nopromiseco(generator) {
    let gen = generator();
    function next(gend) {
      gend = gen.next(gend&&gend.value);
      if(!gend.done) {
        next(gend);
      } else {
        return gen.value
      }
    }
    next(gen);
  }
  nopromiseco(generator);
  
  const co = require('co');
  
  function *generatorco() {
    let a = yield {value:1,key:1}
    console.log(a);
    let b = yield {value:2,key:1}
    console.log(b)
    let c = yield {value:3,key:1}
    console.log(c)
  }
  
  co(generatorco);
  // co(generator)