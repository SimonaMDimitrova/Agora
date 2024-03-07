"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importDefault(require("react"));
var react_dom_1 = __importDefault(require("react-dom"));
var App = function () {
    return react_1.default.createElement("h1", null, "Hello, TypeScript React!");
};
react_dom_1.default.render(react_1.default.createElement(App, null), document.getElementById('root'));
