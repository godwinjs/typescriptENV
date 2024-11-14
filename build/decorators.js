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
    console.log("I'm sealed", target);
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
    /*
    Execution Order:
        first(): factory evaluated: holla
        secound(): factory evaluated: Hiyo
        I'm sealed {}
        second(): called: Hiyo
        first(): called: holla
    */
    method() {
        console.log("initiated method.");
    }
}
__decorate([
    first("holla"),
    second("Hiyo"),
    sealed
    /*
    Execution Order:
        first(): factory evaluated: holla
        secound(): factory evaluated: Hiyo
        I'm sealed {}
        second(): called: Hiyo
        first(): called: holla
    */
], exClass.prototype, "method", null);
//4. DECORATION_EVALUATION
