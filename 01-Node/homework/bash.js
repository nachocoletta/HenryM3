// bash.js
const commands = require('./commands/index.js');


process.stdout.write('prompt > ');

process.stdin.on('data', function(data){
    var cmd = data.toString().trim();

    process.stdout.write(commands[cmd]());

    process.stdout.write('\nprompt >');
})
