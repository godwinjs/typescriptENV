function join(strArr, sep) {
    console.log('join() function ran', strArr)
    return strArr.join(sep)
}

function split(str) {
    console.log('split() function ran', str)
    return str.split('')
}

function reverse(strArr) {
    console.log('reverse() function ran', strArr)
    return strArr.reverse()
}

const compose = (...functions) => (str) => {

    functions.forEach(f => {
        str = f(str, '_')
    })
    // functions.reduceRight

    return str
}

const composedFunctions = compose(split, reverse, join);

console.log(composedFunctions('hello'))