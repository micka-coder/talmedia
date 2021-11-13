var fs = require('fs');

let segment1 = fs.readFileSync('./segment1.json');
let segment2 = fs.readFileSync('./segment2.json');


segment1 = JSON.parse(segment1);
segment2 = JSON.parse(segment2);

let segment = [ ...segment1, ...segment2];

fs.writeFileSync('./segment.json', JSON.stringify(segment, null, '\t'));
