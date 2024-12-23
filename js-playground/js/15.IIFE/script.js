// // 기본 형태
// (
//     function () {
//         // Do fun stuff
//     }
// )()

// (function () {
//     var aName = "Barry";
// })();
// // IIFE 내부에서 정의된 변수는 외부 범위에서 접근이 불가능하다.
// console.log(aName)
// // throws "Uncaught ReferenceError: aName is not defined"

// var result = (function () {
//     var name = "Barry";
//     return name;
// })();
// // 즉시 결과를 생성한다.
// console.log(result);
// // "Barry"


// function minus(a, b) {
//     return a - b;
// }

// function (a, b) {
//     return a - b;
// }

// const minus = function (a, b) {
//     return a - b;
// }

// (function (a, b) {
//     return console.log(a - b);
// })(1, 2);

console.log(!function() { return true; }()); // false
console.log(void function() { return "hi"; }()); // undefined
console.log(1 + function() { return 1 }()); // 2
console.log(1 - function() { return 1 }()); // 0
console.log(~function() { return true; }()); // -2
console.log(2 * function () { return 1; } ()); // 2
console.log(2 ^ function () { return 2; } ()); // 0
console.log(7 & function () { return 7; } ()); // 7

// const increment = (() => {
//     let counter = 0;
//     console.log(counter);
//     const number = (num) => console.log(`it is ${num} number`);
//     return () => { counter++; number(counter); }
// })()

// console.log(increment);
// increment();
// increment();

// const Score = (() => {
//     let count = 0;
//     return {
//         current: () => { return count },
//         increment: () => { count++ },
//         reset: () => { count = 0 }
//     }
// })();

// console.log(typeof Score);
// console.log(Score);

// Score.increment();
// console.log(Score.current());
// Score.increment();
// console.log(Score.current());
// Score.reset();
// console.log(Score.current());

