var glob = require("glob");
var fs = require("fs");
var shell = require('shelljs');

// options is optional
glob("../rashi/**", null, function (er, files) {
    //console.log("files ===>", files);
    files.forEach((file) => {
        let path = file.split('/');
        let partialPath = [...path];
        let filename = partialPath.pop();
        let book = [...partialPath].pop();
        if(!filename.includes('.md')) return;
        const newFile = `../tanakh/${book}/${filename}`;
        console.log(newFile);
        shell.mv(file,newFile);
    })
});