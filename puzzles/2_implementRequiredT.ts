// As the opposite of Partial<T>, Required<T> sets all properties of T to required.

// Please implement MyRequired<T> by yourself.

// all properties are optional
type _2Foo = {
  a?: string
  b?: number
  c?: boolean
}
const _2a: MyRequired<_2Foo> = {}
// Error
const _2b: MyRequired<_2Foo> = {
  a: 'BFE.dev'
}
// Error
const _2c: MyRequired<_2Foo> = {
  b: 123
}
// Error
const _2d: MyRequired<_2Foo> = {
  b: 123,
  c: true
}
// Error
const _2e: MyRequired<_2Foo> = {
  a: 'BFE.dev',
  b: 123,
  c: true
}
// valid

// SOLUTION
type MyRequired<T> = {
    [ K in keyof T ]: T[K];
}