var glob = require("glob");
var fs = require("fs");
var shell = require('shelljs');

// options is optional
glob("../rashi/torah/**", null, function (er, files) {
    //console.log("files ===>", files);
    files.forEach((file) => {
        let path = file.split('/');
        let partialPath = [...path];
        let filename = partialPath.pop();
        if(filename.includes('.md')) return;
        if(filename.includes("torah")) return;
        //transform filename
        //filename = filename.toLowerCase() + "FGT";
        filename = filename.replace("FGT","");
        partialPath.push(filename);
        const newFile = partialPath.join('/');
        console.log(newFile);
        if(file !== newFile) {
            shell.mv(file,newFile);
        }
    })
});