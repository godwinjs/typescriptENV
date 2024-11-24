// Readonly<T> returns a type that sets all properties of T to readonly.

// Pleaes implement MyReadonly<T> by yourself.

type _3Foo = {
  a: string
}
const _3a:_3Foo = {
  a: 'BFE.dev',
}
a.a = 'bigfrontend.dev'
// OK
const _3b:MyReadonly<_3Foo> = {
  a: 'BFE.dev'
}
b.a = 'bigfrontend.dev'
// Error

// SOLUTION 
type MyReadonly<T> = {
  readonly [K in keyof T]: T[K];
}