import iconvlite from 'iconv-lite';
import * as windows1252 from 'windows-1252';


var body = `â€ `;


body = body.split("\n").map((l) => fix(l)).join("\n");

console.log(body);

function fix(body) {
    const win = windows1252.encode(body);
    const str = iconvlite.decode(win, 'utf-8');
    return str.toString();
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
    "á¸¥": "ḥ"
};