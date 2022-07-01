var fs = require('fs');

module.exports = {
    pwd: function() {
        // process.stdout.write('prompt > ');
        return process.cwd();
    },
    date: function() {
        return Date();
    },
    ls: function() {
        return (fs.readdir('.', function(err, files) {
            if (err) throw err;
            files.forEach(function(file) {
              process.stdout.write(file.toString() + "\n");
            })
            // process.stdout.write("prompt > ");
          }));
    },
    echo: function(data) {
        process.stdin.on(data, function(data){
            process.stdout.write(data);
        })
    }

}