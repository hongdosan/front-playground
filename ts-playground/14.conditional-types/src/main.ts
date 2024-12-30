// type SomeType = T extends U ? X : Y;
// type SomeTypeNum = number;
// type ConditionalType = SomeType extends string ? string : null;

function fn<T>(value: T) {
  return (
    arg: T extends boolean ? 'A' : 'B'
  ) => {
  };
}

const resultStr = fn('');   // B
const resultBoo = fn(true); // A

type StringOrNot<T> = T extends string ? string : never;  // never: 어떠한 값도 가지지 않는 타입
type AUnion = string | boolean | never;                   // 즉, 이는 string | boolean 타입만 들어가게 됨.
const A: StringOrNot<string> = 'string';                  // A = string
// const B: StringOrNot<number> = 'string'; -> Error         // B = never

// type Exclude<T, U> = T extends U ? never : T;
// type ResultType = Exclude<'a' | 'b' | 'c', 'a' | 'b'>;
/*
 'a' extends 'a' | 'b'  ? never : 'a'  ==> never
 'b' extends 'a' | 'b'  ? never : 'b'  ==> never
 'c' extends 'a' | 'b'  ? never : 'c'  ==> c
*/


// type AType<T> = [string | number | boolean] extends [string | number] ? T : never;

// type MyResult = AType<string | number | boolean>;
