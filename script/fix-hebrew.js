var glob = require("glob");
var fs = require("fs");
var shell = require('shelljs');


if (!String.prototype.replaceAll) {
    String.prototype.replaceAll = function(find, replace) {
      return this.split(find).join(replace);
    };
  }

// options is optional
glob("./tanakh/**", null, function (er, files) {
    files.forEach((file) => {
        //let path = file.split('/');
        //let partialPath = [...path];
        //let filename = partialPath.pop();
        if(!file.includes('rashi_en.md')) return;

        let englishRashi = fs.readFileSync(file, { encoding: 'utf-8' });
        let frenchRashi = fs.readFileSync(file.replace('rashi_en.md','rashi_fr.md'),  { encoding: 'utf-8' });
        
        if(!englishRashi || !frenchRashi) {
            console.log("ERROR with " + filename);
        }

        //console.log(englishRashi);
        //return;

        englishRashi = englishRashi.split("\n");
        frenchRashi = frenchRashi.split("\n");

        frenchRashi = frenchRashi.map((l, index) => {
            if(!l.trim().length) return l;
            if(l.includes('### passuk')) return l;
            l = replaceJunk(l, englishRashi[index]);
            l = replaceWord(l);
            return l;
        });

        console.log(file.replace('rashi_en.md','rashi_fr.md'));
        fs.writeFileSync(file.replace('rashi_en.md','rashi_fr.md'), frenchRashi.join("\n"));
        
        //partialPath.push(filename);
        //console.log(partialPath.join('/'));
        //shell.mv(file,partialPath.join('/'));
    })
});


function replaceJunk(french, english) {
    if(!french || !english) return french;
    let r1= english.match(/[\u0590-\u05FF'\- ]{2,}/gm);
    let r2 = french.match(/(×[^a-z]*[×|Ö¼|×™|¥|Ö¹|×¨])|×"'|×-/gm);
    if(!r2) return french;
    if(!r1) return french;
    if(!r2.length) return french;
    if(!r1.length) return french;
    r2.forEach((w, index) => {
        if(!r1[index]) return;
        french = french.replace(w, r1[index]);
    });
    return french;
}

function replaceWord(french) {
    for(var key in list) {
        french = french.replaceAll(key, list[key]);
    }
    return french;
}


var list = {
    "Ã©": "é",
    "Ãª": "ê",
    "Ã?": "è",
    "Yisroel": "Yisrael",
    "Yisroël": "Yisraël",
    "Dovid": "David",
    "â€™": "'",
    "â€?": "'",
    "Ã": "à",
    "â€œ": "\"",
    "â€": "\"",
    "Â\"": "\"",
    "Melochim": "Melahim",
    "mitzvos": "mitzvot",
    "Elozor": "Elazar",
    "Kohen": "kohen",
    "Masechs": "Masehet",
    "Berachos": "Berahot",
    "×": "",
    "¨": "",
    "Ö": "",
    "µ": "",
    "©": "",
    "™": "",
    "ª": "",
    "¼": "",
    "°": "",
    "¹": "",
    "¢": "",
    "¸": "",
    "ž": "",
    "¶": "",
    "²": "",
    "¥": "",
    "œ": "",
    "§": "",
    "¤": "",
    "¦": "",
    "Ÿ": "",
    'aà "': "aë",
    'roà "': "raë",
    'joà "': 'Joë',
    ' oà "': 'où',
    'Â ': '',
    'O.F.': 'ancien français',
    'F.O': 'ancien français',
    'Dans O.F.': 'En ancien français',
    'dans O.F.': 'en ancien français',
    '""': ' ',
    ' curs.': ' cœurs.',
    ' cœurs ': ' cœurs ',
    ' cur.': ' cœur.',
    ' cur ': ' cœur ',
    ' surs.': ' sœurs.',
    ' surs ': ' sœurs ',
    ' ma soeur ': ' ma sœur ',
};