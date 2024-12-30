interface Animal {
    name: string;
}

// 확장
interface Bear extends Animal {
    honey: boolean;
}

const bear: Bear = {
    name: 'honey bear',
    honey: true
}

type AnimalAlias = {
    name: string;
}

// 확장
type BearAlias = AnimalAlias & {
    honey: boolean;
}

const bearAlias: BearAlias = {
    name: 'honey bear',
    honey: true
}

// interface Animal {
//     name: string;
// }
//
// interface Animal {
//     honey: boolean;
// }
//
// const bear1: Animal = {
//     name: 'honey bear',
//     honey: true
// // }
//
// type Animal = {
//     name: string;
// }
//
// type Animal = {
//     honey: boolean;
// }
