import glob from "glob";
import fs from "fs";
import shell from "shelljs";

// options is optional
glob("./talmud bavli/**", null, function (er, files) {
    //console.log("files ===>", files);
    files.forEach((file) => {
        let path = file.split('/');
        let partialPath = [...path];
        let filename = partialPath.pop();
        if(!filename.includes('.md')) return;
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