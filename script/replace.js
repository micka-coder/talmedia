var glob = require("glob");
var fs = require("fs");
var shell = require('shelljs');


if (!String.prototype.replaceAll) {
    String.prototype.replaceAll = function (find, replace) {
        return this.split(find).join(replace);
    };
}

// options is optional
glob("./tanakh/**", null, function (er, files) {
    files.forEach((file) => {
        if (!file.includes('rashi_fr.md')) return;

        let text = fs.readFileSync(file, { encoding: 'utf-8' });

        if (!text) {
            console.log("ERROR with " + file);
        }

        text = text.split("\n");

        text = text.map((l, index) => {
            if (!l.trim().length) return l;
            if (l.includes('### passuk')) return l;
            l = replaceWord(l);
            return l;
        });

        fs.writeFileSync(file, text.join("\n"));
    });
});


function replaceWord(french) {
    for (var key in list) {
        french = french.replaceAll(key, list[key]);
    }
    return french;
}


var list = {
    "Yisroel": "Yisrael",
    "Yisroël": "Yisraël",
    "Dovid": "David",
    "Melochim": "Melahim",
    "mitzvos": "mitzvot",
    "Elozor": "Elazar",
    "Kohen": "kohen",
    "kohen": "kohen",
    "Masechs": "Masehet",
    "Berachos": "Berahot",
    ' curs.': ' cœurs.',
    ' cur.': ' cœur.',
    ' cur ': ' cœur ',
    ' cur"': ' cœur"',
    ' curs.': ' cœurs.',
    ' curs ': ' cœurs ',
    ' curs"': ' cœurs"',
    ' uvre' : ' œuvre',
    "l'uvre" : "l'oeuvre",
    ' tes surs' : ' tes soeurs',
    ' des surs' : ' des soeurs',
    ' vos surs' : ' vos soeur',
    ' sa sur ': ' sa soeur ',
    ' ta sur ': ' ta soeur ',
    ' la sur ': ' la soeur ',
    ' ma sur ': ' ma soeur ',
    ' sa sur"': ' sa soeur"',
    ' ta sur"': ' ta soeur"',
    ' la sur"': ' la soeur"',
    ' ma sur"': ' ma soeur"',
    ' un il ' : ' un oeil ',
    " l'il"   : " l'oeil",
    ' mon il ': ' mon oeil ',
    'Beis Hamikdosh' : 'Beit Hamikdash',
    'Yisro ': 'Yitro ',
    'Yerusholayim': 'Yerushalayim',
    '[O.F.]' : '[ancien français]',
    'oeuvre': 'oeuvre',
    'amohs' : 'amahs',
    '""': ''

};


var list2 = {
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