const a = 5;
const b = -3.23;
const c = true;
const d = '77';
const e = 'test';
const f = undefined;
const g = {
    key1: 4,
    key2: 'key'
};
const h = false;
const i = null;
const j = i ?? b ?? 7;

console.log(a > b);
console.log(a == b);
console.log(a === b);
console.log(a > d);
console.log(a !== b);
console.log(b >= a);
console.log(a || b);
console.log(c || h);
console.log(c && h);
console.log(!c);
console.log(j);
