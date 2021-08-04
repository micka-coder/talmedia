var glob = require("glob");
var fs = require("fs");
var shell = require('shelljs');

// options is optional
glob("./tanakh/**", null, function (er, files) {
    console.log("files ===>", files);
    files.forEach((file) => {
        let path = file.split('/');
        if (path.length === 4) {
            console.log(file);
            console.log(`${path[0]}/${path[1]}/${path[2]}/${path[3].replace('sefer', 'tanakh')}`)
            shell.mv(file, `${path[0]}/${path[1]}/${path[2]}/${path[3].replace('sefer', 'tanakh')}`)
        }
    })
});