let fs = require('fs');
let data=fs.readFileSync('abc.txt');
console.log(data.toString());
//read matter of another file that is in your system

let wdata='dilbar dilbar aaaan dilbar dilbar';
fs.writeFileSync('write.txt',wdata);
// writing matter by creating new file