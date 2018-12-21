const fs = require('fs');

var readableStream = fs.createReadStream('rStream.txt',{highWaterMark:5});
readableStream.setEncoding('UTF8');

var data = '';
readableStream.on('data', chunk =>{
    console.log('chunk: ',chunk);
    data += chunk + '|';
});
readableStream.on('end', chunk =>{
    console.log('readableStream end:\n',data)
});

//---------writable---------

var writableStream = fs.createWriteStream('wStream.txt');
writableStream.write('Some data...','UTF8');
writableStream.write('Some data2...','UTF8');
writableStream.end();

writableStream.on('finish',()=>{
    console.log('writableStream finish')
})

//---------read&write---------