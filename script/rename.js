import glob from "glob";
import fs from "fs";
import shell from "shelljs"

// options is optional
glob("./Rashis/*/*/*", null, function (err, files) {
    //console.log("files ===>", files);
    //console.log("error ===>", err);
    files.forEach((file) => {
        let path = file.split('/');
        console.log("FILE ===>", file);
        shell.mv(file, file.split('/').map(p => {
            if(p.includes('.md')) {
                return 'tanakh-' + p;
            }
            return p;
        }).join('/'));
        //shell.mv(file, file.replace('__TEMP',''));
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