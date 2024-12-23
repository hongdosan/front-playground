var greeting = 'hello';
console.log(greeting); // hello

var greeting = 'hi';
console.log(greeting); //hi

greeting = 'how are you?';
console.log(greeting); //how are you?

let greeting2 = 'hello';
console.log(greeting2); // hello

// let greeting2 = 'hi';
// console.log(greeting); //Uncaught SyntaxError: Identifier 'greeting' has already been declared

greeting2 = 'how are you?';
console.log(greeting2); //how are you?

const greeting3 = 'hello';
console.log(greeting3); // hello

// const greeting3 = 'hi';
// console.log(greeting); //Uncaught SyntaxError: Identifier 'greeting' has already been declared

// greeting3 = 'how are you?';
// console.log(greeting); //Uncaught TypeError: Assignment to constant variable

const arrayList = [1, 2, 3];
arrayList.push(4);
console.log(arrayList);

const objectList = { a: 'a', b: 'b' };
objectList.c = "c"
console.log(objectList);

function func() {
    if (true) {
        var a = 'a';
        console.log(a); // 'a'
    }

    console.log(a); // 'a'
}

func();
console.log(a); // ReferenceError: a is not defined

function func() {
    if (true) {
        let a = 'a';
        console.log(a); // 'a'
    }

    // console.log(a); // ReferenceError: a is not defined
}

// console.log(a); // ReferenceError: a is not defined

let hello;
console.log(hello);

a = 5;
console.log(a);
var a; // 5

// console.log(greeting); // Uncaught ReferenceError: Cannot access 'greeting' before initialization
// const greeting = "hello";

console.log(greeting4); // undefined
let greeting4 = "hello";

func(); //hoisting test

function func() {
    console.log("hoisting test");
}
