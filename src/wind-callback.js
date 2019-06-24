const fs = require('fs');

fs.readFile('./package.json', (err, data)=>{
    console.log(JSON.parse(data));
})