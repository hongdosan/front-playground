// Boolean
let boolean: boolean
let falseBoolean: boolean = false;

// Number
let number: number
let integer: number = 6
let float: number = 1.2345

// String
let string: string
let firstName: string = 'Doe';

// Array
// 한가지 타입만 가지는 배열
let names1: string[] = ['John', 'Kim'];
let names2: Array<string> = ['John', 'Kim'];

// 여러 타입을 가지는 배열(유니언 타입 사용)
let array1: (string | number)[] = ['John', 1, 2];
let array2: Array<string | number> = ['John', 1, 2];

// 여러 타입을 단언 X any
let someArray: any[] = ['John', 1, [], {}, false];

// Interface, Type
// 읽기 전용 배열 생성(readonly, ReadonlyArray)
let stringArray: readonly string[] = ['A', 'B'];
let numberArray: ReadonlyArray<number> = [1, 2];
// stringArray.push('C'); -> Error
// numberArray[0] = 3; -> Error

// Tuple
let tuple1: [string, number];
tuple1 = ['a', 1];
tuple1.push('push is allow');
// tuple1 = ['a', 1, 2]; -> Error
// tuple1 = [1, 'a'] -> Error

let users: [number, string][]
users = [[1, 'John'], [2, 'Doe']];

let tuple2: [string, number]
tuple2 = ['a', 1]
tuple2.push(2); // push is allow
console.log(tuple2)
// tuple2.push(false) -> Error

// any
let any: any = 'abc';
any = 1;
any = [];

// unknown
let unknown: unknown = false;
// let string1: boolean = unknown; -> Error
let string2: boolean = unknown as boolean;  // as: TS에 개발자가 해당 값이 어떤 형식인지 알려주는 것

// Object
let obj: object = {};
let arr: object = [];
// let nul: object = null; -> Error -> "strict": true로 설정해놨기 때문에 에러 발생
let date: object = new Date();

const obj1: { id: number, title: string, description: string } = {
    id: 1,
    title: 'title1',
    description: 'description1',
}

// Union
let union: (string | number)
union = 'hi';
union = 123;
// union = [] -> Error

// Function
let func1: (arg1: number, arg2: number) => number;
func1 = function (x, y) {
    return x * y
}

let func2: () => void;
func2 = function () {
    console.log('hi');
}

// Null, Undefined
// let number1: number = undefined -> Error
// let string9: string = null; -> Error
// let object: { a: 10, b: false } = undefined; -> Error
// let array: any[] = null; -> Error
// let undefined1: undefined = null; -> Error
// let null1: null = undefined; -> Error
// let void1: void = null; -> Error
let void2: void = undefined;

// void
function greeting(): void {
    console.log('hi')
}

const hi: void = greeting()
console.log(hi)  // undefined


// never
function throwError(): never {
    throw new Error('error');
}

function keepProcessing(): never {
    while (true) {
        console.log('hi');
    }
}

const never: [] = []
// never.push(1) -> Error
