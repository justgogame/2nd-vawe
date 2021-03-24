// function showFistMessage(text) {
//     alert(text);
// }

// showFistMessage('Hello');

// let calc = function(a, b) {
//     return (a + b);
// }

let calc = (a, b) => a + b;

console.log(calc(2, 3));

function retVar() {
    let num = 50;
    return num;
}

let anotherNum = retVar();
console.log(anotherNum);

let str = 'test';
console.log(str.length);

console.log(str.toLocaleUpperCase());
console.log(str.toLocaleLowerCase());

let twelve = '12.2px';
// console.log(Math.round(twelve));

console.log(parseInt(twelve));
console.log(parseFloat(twelve));