//DECORATORS @sealed -> function decorator: is a function with target as argument
function sealed(target: any, propertyKey:string, descriptor:PropertyDescriptor) {
    // do something with 'target' ...
    console.log("I'm sealed", target)
}

//DECORATOR_FACTORIES @color('red') -> function decorator factories: function that returns a function decorator factory 
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
    // DECORATOR_COMPOSITION [first(secound(x)) (f . g)(x) just like function composition in mathematics ]
    @first("holla")
    @second("Hiyo")
    @sealed
    /*
    Execution Order:
        first(): factory evaluated: holla
        secound(): factory evaluated: Hiyo
        I'm sealed {}
        second(): called: Hiyo
        first(): called: holla
    */

    method() {
        console.log("initiated method.")
    }
}