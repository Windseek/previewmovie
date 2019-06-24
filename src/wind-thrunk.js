function thunkify(fn) {
    return function () {
        let args = Array.from(arguments);
        return function (callback) {
            let called;
            let proxyCallBack = function () {
                if (called) {
                    return;
                }
                called = true;
                callback.apply(null, Array.from(arguments));
            }
            let wholeArgs = [...args, proxyCallBack];
            try {
                return fn.apply(this, wholeArgs);
            }
            catch (err) {
                callback(err);
            }
        }
    }
}

function demo(arg,next){
    console.log("demo"+arg+" done");
    next();
}

let fnThunk = thunkify(demo);

//执行器生产函数
function * gen(){
    yield fnThunk(1);
    yield fnThunk(2);
}

//执行器
function run(g){
    let genInstance = g();
    let next = function(){
        let res = genInstance.next();
        if(!res || res.done) return;
        //next 就是res.value的callback回调函数，当res.value执行完之后会进入next，从而进入下个yield
        res.value(next);
    };
    next();
}

run(gen);