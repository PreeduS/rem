
//const express = require('express');

process.stdout.write("Hello World!" + "\n");
process.stderr.write("Hello World!" + "\n");
process.stdout.write("cwd: " + process.cwd() + "\n");



setInterval(()=>{},2000);

['SIGINT', 'SIGTERM'].forEach(sig => {
    process.on(sig, () => {
        console.log('exit on ',sig)
        process.exit();
    });
  });

process.on('beforeExit',()=>{
    console.log('beforeExit');
});
process.on('exit',()=>{
    console.log('exit: ',process.uptime());
});



//console.log('argv: ',process.argv);
//console.log('platform: ',process.platform);
//console.log('env: ',process.env);
