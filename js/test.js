"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
var forEach = function forEach(array, fn) {
    var i = void 0;
    console.log(1);
    for (i = 0; i < array.length; i++) {
        fn(array[i]);
    }
};

exports.default = forEach;