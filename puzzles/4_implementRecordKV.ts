// Record<K, V> returns an object type with keys of K and values of V.

// Please implement MyRecord<K, V> by yourself.

// Notice that property key could only be number | string | symbol.

type Key = '_4a' | '_4b' | '_4c'
const _4a: Record<Key, string> = {
  _4a: 'BFE.dev',
  _4b: 'BFE.dev',
  _4c: 'BFE.dev'
}
_4a._4a = 'bigfrontend.dev' // OK
// _4a._4b = 123 // Error
// _4a._4d = 'BFE.dev' // Error
// type _4Foo = MyRecord<{_4a: string}, string> // Error

// SOLUTION 
type MyRecord<P extends keyof any, V> = {
    [K in P]: V;
  }