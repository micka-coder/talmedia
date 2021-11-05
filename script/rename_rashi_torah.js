var glob = require("glob");
var fs = require("fs");
var shell = require('shelljs');

// options is optional
glob("./rashi/Neviim/**", null, function (er, files) {
    //console.log("files ===>", files);
    files.forEach((file) => {
        let path = file.split('/');
        let partialPath = [...path];
        let filename = partialPath.pop();

        if(!filename.includes('.md')) return;

        filename = 'tanakh-' + filename;
        //if (path.length === 4) {
        //console.log(filename);
        /*
        filename = filename.replace('rashi', 'tanakh');
        filename = filename.replace('EN', 'rashi_en');
        filename = filename.replace('FR', 'rashi_fr');
        filename = filename.replace('VO', 'rashi_vo');
        */
        partialPath.push(filename);
        console.log(partialPath.join('/'));
        //console.log(`${path[0]}/${path[1]}/${path[2]}/${path[3].replace('sefer', 'tanakh')}`)
        shell.mv(file,partialPath.join('/'));
        //}
    })
});