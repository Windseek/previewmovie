
const co = require('co');
const fetch = require('node-fetch');

function *getContent() {
    let res = yield fetch('https://api.apiopen.top/todayVideo');
    let movie = yield res.json();
    console.log(movie);
}
co(getContent);