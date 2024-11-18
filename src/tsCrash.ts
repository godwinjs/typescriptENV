// return type string and argument type string
function print(msg: string): string {
    return msg
}

// Typing callbacks
// callback has no argument and returns nothing
function callback(cb: () => void) {
    // do

    cb()
}
// callback(() => {
//     console.log('I am a callback function with no argument and return nothing')
// })
// // // callback
function cb( stringToNumb: ( str: string ) => number ){
    //@ts-ignore
    // console.log(str)
    // stringToNumb
}
cb.call(this, (str) => {
    return parseInt(str)
})

// UNION TYPES 
let item: string | number | boolean ;
let array: ( string | number )[]
// you can also return union types

// DESCRIMINATING UNIONS
type User = {
    name: string;
    age: number;
}
type Res = 
{ status: "success", data: User } |
{ status: "error", error_msg: string } |
{ status: "pending", expiry_date: string }

let response: Res = {
    status: "pending",
    expiry_date: new Date().toDateString()
}

// console.table(response)

// INTERSECTION TYPES
// type User = {}
// type Address = {}
// type UserInfo = User & Address

// LITERAL TYPES
// let course: 'typescript' = 'typescript';
// let spacing: 40 = 40;
// let literal: "typescript" | 30 | 20 | 'css' = 20

// TYPE ASSERTION
// knowing that my_id exist and getElement by ID will return HTMLElement and not null
// const elem: HTMLElement = document.getElementById('my_id') as HTMLElement; // can be risky
// const elem: number = document.getElementById('my_id') as any as number;
// SAFE T_A
type UserInfo = {
    name: string;
    staffCode: number;
}

const user: UserInfo = {} as UserInfo // useful nd kinda safe

// INTERFACES it can be extended
interface CarInfo {
    name: string;
    model: string;
    price: string
}

interface CarProto extends CarInfo {
    code: number;
}
const car: CarProto = {
    name: "",
    model: "",
    price: "",
    code: 4
}

// VARIABLE TYPES
function getRandom<Type>(arr: Type[]) {
    let random = arr[Math.round(Math.random() * arr.length - 1) ]
    return random
}

const randomColor = getRandom<string>(["red", "blue", "purple","green"]);
const randomNumber = getRandom([4, 89, 55, 92, 44, 93])

// console.log(randomColor, randomNumber)
//Key = string: if the type is not set later, it defults to a string type.
interface StorageItem<T, ID, Key = string > {
    key: Key;
    id: ID;
    data: T;
}

const Item: StorageItem<string, number> = {
    key: "hello",
    id: 2,
    data: "data loaded"
}

type MyArray<T> = T[];
const arr: MyArray<string> = ["1", "2", "3"]

// UTILITY TYPES

type User_D = {
    id: string;
    username: string;
    age: number;
    email: string;
    password: string;
}
// Pick, Omit, Partial = make every property optional, Required = make everything required
type UserWithoutPassword = Omit<User_D, "password" | "email">;

const user_d: UserWithoutPassword = {
    username: "sucker",
    age: 33,
    id: 'dje',
    // password: 'dfeed'
}