//1. DECORATORS @sealed -> function decorator: is a function with target as argument
function sealed(target: any, propertyKey:string, descriptor:PropertyDescriptor) {
    // do something with 'target' ...
    const realFunction = descriptor.value;
    console.log('realFunction', `${realFunction}`)

    descriptor.value = function( ...args: any[] ){
        // the first argument to the realMethod
        const [arg] = args;
        const argJoined = arg.join('')
        // why use apply instead of call?
        realFunction.apply(this, [argJoined])
    }

    console.log(propertyKey, 'propertyKey')
    console.log("I'm sealed", target, descriptor)
}

//2. DECORATOR_FACTORIES @color('red') -> function decorator factories: function that returns a function decorator factory 
function color(value: string) {
    // this is the decorator factory, it sets up
    // the returned decorator function
    return function (target: any) {
      // this is the decorator
      // do something with 'target' and 'value'...
    };
}

// Ex:
function first(msg: string) {
    console.log("first(): factory evaluated: " + msg);
    return function (target: any, propertyKey: string, descriptor: PropertyDescriptor) {
      console.log("first(): called: " + msg);
    };
}

function second(msg: string){
    console.log("secound(): factory evaluated: " + msg)
    return function ( traget: any, propertyKey: string, descriptor: PropertyDescriptor) {
        console.log("second(): called: " + msg)
    }
}

class exClass {
    constructor(){
        console.log('constructor initiated')
    }
    //3. DECORATOR_COMPOSITION [first(secound(sealed(x))) (f . g)(x) just like function composition in mathematics ]
    // @first("holla")
    // @second("Hiyo")
    @sealed
    /*
    Execution Order:
        first(): factory evaluated: holla
        secound(): factory evaluated: Hiyo
        I'm sealed {}
        second(): called: Hiyo
        first(): called: holla
    */

    print( str: string[]) {
        console.log(str)
    }
    @sealed
    method() {
        console.log('another method')
    }
}

const stringManager = new exClass();
stringManager.print(['h', 'e'])
//4. DECORATION_EVALUATION
