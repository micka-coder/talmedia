import glob from "glob";
import fs from "fs";
import shell from "shelljs";

// options is optional
glob("../talmud_bavli_2/**", null, function (er, files) {
    //console.log("files ===>", files);
    files.forEach((file) => {
        let path = file.split('/');
        let partialPath = [...path];
        let filename = partialPath.pop();
        if(!filename.includes('.md')) return;
        //if(filename.trim() === "talmud_bavli_2") return;
        //if(filename.toLowerCase() === filename) return;
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