var glob = require("glob");
var fs = require("fs");

// options is optional
glob("./michnayot/**", null, function (er, files) {
    files = files.map((f) => {
        if(f.slice(-2) !== 'md') return;
        return f.split('/').reverse()[0];
    }).filter(Boolean);

    console.log(files);
}); 

