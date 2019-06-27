function *iterator(arr){
    for(let i = 0; i < arr.length; i++){
        yield arr[i]
    }
}

let gen = iterator(['test1', 'test2', 'test3']);

console.log("第一个yield", gen.next());
console.log("第二个yield", gen.next());
console.log("第三个yield", gen.next());