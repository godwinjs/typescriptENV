"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
//1. DECORATORS @sealed -> function decorator: is a function with target as argument
function sealed(target, propertyKey, descriptor) {
    // do something with 'target' ...
    const realFunction = descriptor.value;
    console.log('realFunction', `${realFunction}`);
    descriptor.value = function (...args) {
        // the first argument to the realMethod
        const [arg] = args;
        const argJoined = arg.join('');
        // why use apply instead of call?
        realFunction.apply(this, [argJoined]);
    };
    console.log(propertyKey, 'propertyKey');
    console.log("I'm sealed", target, descriptor);
}
//2. DECORATOR_FACTORIES @color('red') -> function decorator factories: function that returns a function decorator factory 
function color(value) {
    // this is the decorator factory, it sets up
    // the returned decorator function
    return function (target) {
        // this is the decorator
        // do something with 'target' and 'value'...
    };
}
// Ex:
function first(msg) {
    console.log("first(): factory evaluated: " + msg);
    return function (target, propertyKey, descriptor) {
        console.log("first(): called: " + msg);
    };
}
function second(msg) {
    console.log("secound(): factory evaluated: " + msg);
    return function (traget, propertyKey, descriptor) {
        console.log("second(): called: " + msg);
    };
}
class exClass {
    constructor() {
        console.log('constructor initiated');
    }
    //3. DECORATOR_COMPOSITION [first(secound(sealed(x))) (f . g)(x) just like function composition in mathematics ]
    // @first("holla")
    // @second("Hiyo")
    /*
    Execution Order:
        first(): factory evaluated: holla
        secound(): factory evaluated: Hiyo
        I'm sealed {}
        second(): called: Hiyo
        first(): called: holla
    */
    print(str) {
        console.log(str);
    }
    method() {
        console.log('another method');
    }
}
__decorate([
    sealed
    /*
    Execution Order:
        first(): factory evaluated: holla
        secound(): factory evaluated: Hiyo
        I'm sealed {}
        second(): called: Hiyo
        first(): called: holla
    */
], exClass.prototype, "print", null);
__decorate([
    sealed
], exClass.prototype, "method", null);
const string = new exClass();
string.print(['h', 'e']);
/* 4. DECORATION_EVALUATION
    There is a well defined order to how decorators applied to various declarations inside of a class are applied:
        Parameter Decorators, followed by Method, Accessor, or Property Decorators are applied for each instance member.
        Parameter Decorators, followed by Method, Accessor, or Property Decorators are applied for each static member.
        Parameter Decorators are applied for the constructor.
        Class Decorators are applied for the class.*/
// 5. CLASS_DECORATORS
