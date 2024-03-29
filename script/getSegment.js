import glob from "glob";
import fs from "fs";

var segments = [];
var segments2 = [];
var segments3 = []

// options is optional
glob("./tanakh/**", null, function (er, files) {
  files = files.map((f) => {
      if(f.slice(-2) !== 'md') return;
      return f.split('/').reverse()[0];
  }).filter(Boolean);

  files.forEach((file) => {
        
        const id = file.split('-').slice(0, -1).join('-');
        const lang = file.split('-').pop().replace('.md','').toUpperCase();
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
  fs.writeFileSync('./segment1.json', JSON.stringify(segments, null, '\t'));

}); 


glob("./michnayot/**", null, function (er, files) {
    files = files.map((f) => {
        if(f.slice(-2) !== 'md') return;
        return f.split('/').reverse()[0];
    }).filter(Boolean);
  
    files.forEach((file) => {
          
        const id = file.split('-').slice(0, -1).join('-');
        const lang = file.split('-').pop().replace('.md','').toUpperCase();
          const path = id.replace('chapter-', 'chapter_')
          .split('-')
          .map((i) => {
              return i.replace('_', '-');
          });
  
          let index = segments2.findIndex((e) => { return e.id === id });
          if(index >= 0) {
              segments2[index].suffix.push(lang);
          } else {
              segments2.push({
                  id,
                  path,
                  suffix: [lang]
              })
          }
  
    });
  
    //console.log(segments);
    fs.writeFileSync('./segment2.json', JSON.stringify(segments2, null, '\t'));
  
  }); 


  glob("./talmud_bavli/**", null, function (er, files) {
    files = files.map((f) => {
        if(f.slice(-2) !== 'md') return;
        return f.split('/').reverse()[0];
    }).filter(Boolean);
  
    files.forEach((file) => {
          
        if(file.includes('daf-1a')) return;
        if(file.includes('daf-1b')) return;
        
        const id = file.split('-').slice(0, -1).join('-');
        const lang = file.split('-').pop().replace('.md','').toUpperCase();
        const path = id.replace('daf-', 'daf_')
        .split('-')
        .map((i) => {
            return i.replace('_', '-');
        }).map((i) => {
            return i.replace('talmud-bavli', 'talmud_bavli');
        });
  
          let index = segments3.findIndex((e) => { return e.id === id });
          if(index >= 0) {
              segments3[index].suffix.push(lang);
          } else {
              segments3.push({
                  id,
                  path,
                  suffix: [lang]
              })
          }
  
    });
  
    //console.log(segments);
    fs.writeFileSync('./segment3.json', JSON.stringify(segments3, null, '\t'));
  
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