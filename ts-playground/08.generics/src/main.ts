function getArrayLength(arr: number[] | string[] | boolean[]): number {
  return arr.length;
}

function getArrayLengthGenerics<T>(arr: T[]): number {
  return arr.length;
}

const array1 = [1, 2, 3];
const array2 = ["a", "b", "c"];
const array3 = [true, false, true];

getArrayLengthGenerics<number>(array1);
getArrayLengthGenerics<string>(array2);
getArrayLengthGenerics<boolean>(array3);

// interface Vehicle<T> {
//     name: string;
//     color: string;
//     option: T;
// }

// const car: Vehicle<{ price: number }> = {
//     name: 'Car',
//     color: 'red',
//     option: {
//         price: 1000
//     }
// }

// const bike: Vehicle<boolean> = {
//     name: 'Bike',
//     color: 'green',
//     option: true
// }

const makeArr = <X, Y>(x: X, y: Y): [X, Y] => {
  return [x, y];
}

const arr1 = makeArr<number, number>(4, 5);
const arr2 = makeArr<string, string>("a", "b");
const arr3 = makeArr<string, number>("a", 7);
//
//
// const makeArr1 = <X, Y = string>(x: X, y: Y): [X, Y] => {
//     return [x, y];
// }
//
// const array1 = makeArr1<string>("a", "b");
//
//
const makeFullName = <T extends { firstName: string, lastName: string }>(obj: T) => {
  return {
    ...obj,
    fullName: obj.firstName + " " + obj.lastName
  }
}

makeFullName({firstName: "John", lastName: "Doe", location: 'Seoul'})
makeFullName({firstName: "John", lastName: "Doe", hello: 'Greeting'})


