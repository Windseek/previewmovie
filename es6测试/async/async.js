/** 
 * 传统的回调模式
*/
const fs = require('fs');

fs.readFile('./package.json', (err, data)=>{
    console.log(data)
    return JSON.parse(data);
})

/**
 *  promise 模式
*/
const util = require('util');
const readAsync = util.promisify(fs.readFile)

readAsync('./package.json')
    .then(data => {
        console.log(data)
        return JSON.parse(data);
    })
    .catch(err => {
        console.log(err);
    })

/** 
 * co 模式
*/   
const co = require('co');
const fetch = require('node-fetch');

function *getContent() {
    let res = yield fetch('https://api.apiopen.top/todayVideo');
    let movie = yield res.json();
    console.log(movie);
}
co(getContent);

/** 
 * async await 模式
*/
async function init() {
    let data = await readAsync('./package.json');
    console.log(JSON.parse(data));
}
init();

/** 
 * anync await 模式是co的语法糖，
 * co库利用generator方法，yield指令，next传参，实现自动化执行
 * 利用promise实现每步执行都返回一个promise对象
 * co库的执行，yield语句后面全是promise对象，通过.then().then()....进行链式操作
 * async await await后可以传是符串，数字，当是字符串和数字的时候其实是同步进行的，co操作没有同步，不支持字符串和数字
 * async await 更适合异步请求的业务场景，co库除了异步场景还有自动化流程处理等潜在作用
*/
