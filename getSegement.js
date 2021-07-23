var glob = require("glob");
var fs = require("fs");

var segments = [];

// options is optional
glob("./tanakh/**", null, function (er, files) {
  files = files.map((f) => {
      if(f.slice(-2) !== 'md') return;
      return f.split('/').reverse()[0];
  }).filter(Boolean);

  files.forEach((file) => {
        
        const id = file.slice(0,-6);
        const lang = file.slice(-5, -3);
        const path = id.replace('chapter-', 'chapter_')
        .split('-')
        .map((i) => {
            return i.replace('_', '-');
        });

        let index = segments.findIndex((e) => { return e.id === id });
        if(index >= 0) {
            segments[index].suffix.push(lang);
        } else {
            segments.push({
                id,
                path,
                suffix: [lang]
            })
        }

  });

  //console.log(segments);
  fs.writeFileSync('./segment2.json', JSON.stringify(segments, null, '\t'));

}); 

/*
{
    "path": [
        "michnayot",
        "menachot",
        "chapter-1"
    ],
    "suffix": [
        "FR",
        "EN",
        "VO"
    ],
    "fragmentLength": 4,
    "fragmentName": "michna",
    "fragmentSelection": true
},
*/