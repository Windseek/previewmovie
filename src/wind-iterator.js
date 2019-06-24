// function *iterator(arr){
//     for(let i = 0; i < arr.length; i++){
//         yield arr[i]
//     }
// }

// let gen = iterator(['test1', 'test2', 'test3']);

// console.log("第一个yield", gen.next());
// console.log("第二个yield", gen.next());
// console.log("第三个yield", gen.next());

// /**
// *@description 获取自然数
// */
// function *getNaturalNumber(){
//     var seed = 0;
//     while(true) {
//       yield seed ++;
//     }
//   }
//   var gen = getNaturalNumber();// 实例化一个Generator
//   /* 启动Generator */
//   console.log(gen.next()) //{value: 0, done: false}
//   console.log(gen.next()) //{value: 1, done: false}
//   console.log(gen.next()) //{value: 2, done: false}

// function * input(){
//     let array = [];
//     while(1) {
//         array.push(yield array);
//     }
// }
// var gen = input();
// console.log(gen.next("西")) // { value: [], done: false }
// console.log(gen.next("部")) // { value: [ '部' ], done: false }
// console.log(gen.next("世")) // { value: [ '部', '世' ], done: false }
// console.log(gen.next("界")) // { value: [ '部', '世', '界' ], done: false }

var fs = require("fs");
var readFile = function(filename){ // 包装为高阶函数
  return function(cb){
    fs.readFile(filename, cb);
  }
}

function thunkify(fn){
    return function(){
      var args = [].slice.call(arguments);
      var pass; 
      args.push(function(){
        if(pass) pass.apply(null, arguments);
   }); // 植入回调函数，里面包含控制逻辑
      fn.apply(null, args);
      return function(fn) {
        pass = fn; // 外部可注入的控制逻辑
      }
    }
  }

  function run(generator){
    var gen = generator();
    function next(data) {
        var ret = gen.next(data); // 将数据传回Generator
        if(ret.done) return;
        ret.value(function(err, data){
            if(err) throw(err);
            next(data);
        });
    }
    next(); // 启动任务
  }

  function *generator() {
      let a = yield function(){
          return 1
      };
      console.log('a'+a);
      let b = yield 2;
      console.log('b'+b);
  }

  run(generator)