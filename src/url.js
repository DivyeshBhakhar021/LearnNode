const path = require("path");
const url = require("url");

const myntra = "https://www.myntra.com/jeans/and/and-women-skinny-fit-mid-rise-jeans/22258816/buy"

// console.log(url.parse(myntra,true));


const urldata = {
    protocol:'https://',
    host:'www.abc.com',
    path:'/product',
    search:'pid=20',
}
// console.log(url.format(urldata));


const path1= 'https://www.abc.com/pro/'
const path2 = '../10'

console.log(url.resolve(path1,path2));