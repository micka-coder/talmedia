import glob from "glob";
import fs from "fs";
import shell from "shelljs"

// options is optional
glob("./Babli-V2/*/*/*", null, function (err, files) {
    //console.log("files ===>", files);
    //console.log("error ===>", err);
    files.forEach((file) => {
        let path = file.split('/');
        console.log("FILE ===>", file);
        //shell.mv(file, `${file.toLowerCase()}__TEMP`);
        shell.mv(file, file.replace('__TEMP',''));
        /*
        if(file.includes('.md')) {
            console.log(file);
            shell.mv(file, file);
        }
        */
        //if (path.length === 4) {
            //console.log(file);
            //console.log(`${path[0]}/${path[1]}/${path[2]}/${path[3].replace('sefer', 'tanakh')}`)
            //shell.mv(file, `${path[0]}/${path[1]}/${path[2]}/${path[3].replace('sefer', 'tanakh')}`)
        //}
    })
});