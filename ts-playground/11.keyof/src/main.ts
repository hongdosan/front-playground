interface IUser {
    name: string;
    age: number;
    address: string;
}

type IUserKeys = keyof IUser // return: "name" | "age" | "address"

const user = {
    name: "John",
    age: 20,
    address: 'seoul'
}

type UserKeys = keyof typeof user // return: "name" | "age" | "address"

enum UserRole {
    admin,
    manager
}

type UserRoleKeys = keyof typeof UserRole // return: "admin" | "manager"


type DeviceFormatter = {
    manufacturer?: string;
    price?: number;
}
