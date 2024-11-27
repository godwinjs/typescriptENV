// Omit<T, K> returns a new type by picking the properties in T but not in K.

// Please implement MyOmit<T, K> by yourself.

type _5Foo = {
  a: string
  b: number
  c: boolean
}
type _5A = MyOmit<_5Foo, 'a' | 'b'> // {c: boolean}
type _5B = MyOmit<_5Foo, 'c'> // {a: string, b: number}
type _5C = MyOmit<_5Foo, 'c' | 'd'>  // {a: string, b: number}

// SOLUTION
// your code here, please don't use Omit<T, K> in your code
// type MyOmit<A, B extends keyof A > = {
//   [K in Exclude<keyof A, B>]: A[K];
// }

// type MyOmit<A, B > = {
//   [K in keyof A as A[K] extends B] ? never : K ]: A[K]
// }

type MyOmit<A, B extends keyof any > = {
  [K in Exclude<keyof A, B>]: A[K];
}

// type MyOmit<A, B > = {
//   [K in keyof A as B extends any ? never : K ]: A[K]
// }

// Explanation:
// keyof T: Gets all keys of the type T.
// Exclude<keyof T, K>: Filters out keys in K from the keys in T.
// Mapped Type: The [P in Exclude<keyof T, K>] rebuilds the object using only the remaining keys.

// Why It Works:
// Exclude ensures that only valid keys of T are used, effectively ignoring keys in K that are not part of T.
// The mapped type [P in ...] iterates over the remaining keys after exclusion and retains their associated types from T.
// This approach mirrors the functionality of TypeScript's built-in Omit utility.
