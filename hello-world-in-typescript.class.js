"use strict";
exports.__esModule = true;
exports.HelloWorldInTypescript = void 0;
var HelloWorldInTypescript = /** @class */ (function () {
    function HelloWorldInTypescript() {
    }
    HelloWorldInTypescript.HelloWorld = function () {
        var h1 = document.createElement("h1");
        h1.innerText = "Hello, world in Typescript";
        document.body.appendChild(h1);
    };
    return HelloWorldInTypescript;
}());
exports.HelloWorldInTypescript = HelloWorldInTypescript;
