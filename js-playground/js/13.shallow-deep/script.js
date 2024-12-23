// shallow copy
const aArray = [1, 2, 3];

// shallow copy with spread operator
const bArray = [...aArray, 4];
console.log('aArray', aArray);
console.log('bArray', bArray);
console.log('aArray === bArray', aArray === bArray);

// shallow copy with Object.assign()
const cArray = Object.assign([], bArray);
console.log(cArray); // [1, 2, 3, 4]
console.log(bArray === cArray); // false


// Nested Arrays and Objects
cArray.push([5, 6, 7]);
console.log(cArray); // [1, 2, 3, 4, Array(3)]
const dArray = [...cArray, 10];
console.log(dArray); // [1, 2, 3, 4, Array(3), 10]
dArray[4].push(8);
console.log(cArray); // [1, 2, 3, 4, Array(4)]
console.log(dArray); // [1, 2, 3, 4, Array(4), 10]

// // 얕은 동결
const aObject = {
    "a": "a",
    "b": "b",
    "cObject": { "a": 1, "b": 2 }
}

Object.freeze(aObject);
aObject.a = "c";
console.log(aObject);
aObject.cObject.a = 3;
console.log(aObject);

// deep copy
// deep copy with json.parse(json.stringify())
const newAObject = JSON.parse(JSON.stringify(aObject));
console.log(aObject);
console.log(newAObject);
aObject.cObject.a = 3;
console.log(aObject);
console.log(newAObject);

// deep copy with nested spread operator
const newAObject = { ...aObject, cObject: { ...aObject.cObject } }
console.log('aObject', aObject);
console.log('newAObject', newAObject);
aObject.cObject.a = 3;
console.log('aObject', aObject);
console.log('newAObject', newAObject);

// deep copy with lodash
const newAObject = _.cloneDeep(aObject);
console.log('aObject', aObject);
console.log('newAObject', newAObject);
aObject.cObject.a = 3;
