const fs = require('fs');

var readableStream = fs.createReadStream('rStream.txt',{highWaterMark:5});
var writableStream = fs.createWriteStream('wStream.txt');
readableStream.setEncoding('UTF8');


readableStream.on('data', chunk =>{
    console.log('chunk: ',chunk);
    writableStream.write(chunk+'|');
   
});

readableStream.on('end', () =>{
    console.log('readableStream end')
    //writableStream.end();
});


/*
writableStream.on('finish',()=>{
    console.log('writableStream finish')
})*/

//---------pipes---------
var readableStream2 = fs.createReadStream('rStream.txt',{highWaterMark:5});
var writableStream2 = fs.createWriteStream('wStream2.txt');
readableStream2.pipe(writableStream2);