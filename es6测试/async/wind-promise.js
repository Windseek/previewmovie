const fs = require('fs');
const util = require('util');
const readAsync = util.promisify(fs.readFile)

var res = readAsync('./package.json')
    .then(data => {
        console.log(data)
        return JSON.parse(data);
    })
    .catch(err => {
        console.log(err);
    })
    setTimeout(() => {
        console.log(res.name);
    },10000)