"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
// @sealed -> function decorator: is a function with target as argument
function sealed(target, propertyKey, descriptor) {
    // do something with 'target' ...
    console.log("I'm sealed", target);
}
// @color('red') -> function decorator factories: function that returns a function decorator factory 
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
    method() {
        console.log("initiated method.");
    }
}
__decorate([
    first("holla"),
    second("Hiyo"),
    sealed
], exClass.prototype, "method", null);
