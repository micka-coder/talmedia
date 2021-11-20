import fs from "fs";

let segment1 = fs.readFileSync('./segment1.json');
let segment2 = fs.readFileSync('./segment2.json');
let segment3 = fs.readFileSync('./segment3.json');

segment1 = JSON.parse(segment1);
segment2 = JSON.parse(segment2);
segment3 = JSON.parse(segment3);

let segment = [ ...segment1, ...segment2, ...segment3];

fs.writeFileSync('./segment.json', JSON.stringify(segment, null, '\t'));
