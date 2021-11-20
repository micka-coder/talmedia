import glob from "glob";
import fs from "fs";
import shell from "shelljs";

if (!String.prototype.replaceAll) {
    String.prototype.replaceAll = function (find, replace) {
        return this.split(find).join(replace);
    };
}

glob("./talmud bavli/**", null, function (er, files) {
    files.forEach((file) => {
        if (!file.includes('-fr.md')) return;
        let texte = fs.readFileSync(file, { encoding: 'utf-8' });
        texte = replaceWord(texte);
        fs.writeFileSync(file, texte);
    })
});

function replaceWord(texte) {
    for (var key in list) {
        texte = texte.replaceAll(key, list[key]);
    }
    return texte;
}

var list = {
    "Ã©": "é",
    "Ãª": "ê",
    "Ã?": "è",
    "â€™": "'",
    "â€?": "'",
    "Ã": "à",
    "â€œ": "\"",
    "â€": "\"",
    "Â\"": "\"",
    "á¸¤": "Ḥ",
    "á¸¥": "ḥ",
    "Â§": "§"
};