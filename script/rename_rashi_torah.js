var glob = require("glob");
var fs = require("fs");
var shell = require('shelljs');

// options is optional
glob("./michnayot/rosh hashanah/**", null, function (er, files) {
    files.forEach((file) => {
        let path = file.split('/');
        let partialPath = [...path];
        let filename = partialPath.pop();
        if(!filename.includes('.md')) return;

        filename = filename.replace('rosh-hashanah', 'rosh hashanah');
        partialPath.push(filename);
        console.log(partialPath.join('/'));
        shell.mv(file,partialPath.join('/'));
    })
});