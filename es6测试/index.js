import { readFile, writeFileSync as wfs } from 'fs';
import { promisify } from 'util';
import { resolve as r } from 'path';
import * as qs from 'querystring';

/** 
 * 当前目录__dirname到src这个目录，..就是他的上一级，到了根目录了
 * 读取data后写进当前目录中去
*/
promisify(readFile)(r(__dirname, '../package.json'))
    .then(data => {
        // data = JSON.parse(data);
        console.log(data);
        wfs(r(__dirname, './copypackage'), data, 'utf8')
    })
