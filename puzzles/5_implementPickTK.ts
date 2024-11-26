// Pick<T, K>, as the name implies, returns a new type by picking properties in K from T.

// Please implement MyPick<T, K> by yourself.

type _4Foo = {
  a: string
  b: number
  c: boolean
}
type A = MyPick<_4Foo, 'a' | 'b'> // {a: string, b: number}
type B = MyPick<_4Foo, 'c'> // {c: boolean}
// type C = MyPick<_4Foo, 'd'> // Error

// SOLUTION
type MyPick<T, K extends keyof T > = {
    [P in K]: T[P]
}

// Explanation:
// K extends keyof T:

// Ensures that K is constrained to be a subset of the keys in T.
// This prevents errors when trying to pick keys that don't exist in T.
// Mapped Type [P in K]:

// Iterates over the keys in K and maps them to their corresponding types in T.
// Key Errors:

// If K contains keys not present in T, TypeScript will throw an error because of the extends keyof T constraint.

// Key Points:
// This implementation behaves identically to TypeScript's built-in Pick<T, K> utility type.
// Ensuring K is constrained to keyof T avoids runtime errors by validating the keys at compile time.
