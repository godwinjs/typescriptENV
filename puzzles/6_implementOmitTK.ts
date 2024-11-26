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

type MyOmit<A, B extends keyof any> = {
    [ K in Exclude< keyof A, B>]: A[K]
}
