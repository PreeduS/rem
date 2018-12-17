const exec = require('child_process').exec;
const testscript = exec('npm run test');

testscript.stdout.on('data', function(data){
    //console.log(data); 
    // sendBackInfo();
});

testscript.stderr.on('data', function(data){
    console.log("-------------------------------\n",data);
    // triggerErrorStuff(); 
});

/*

process.argv
process.stdout
process.stderr
process.stdout.write('...' + '\n')
process.exit();



exec('...', (err, stdout, stderr) => {})


const spawn = require('child_process').spawn;

var child = spawn(process.execPath. [__filename], 'child')
//child.stdout.on //...
*/