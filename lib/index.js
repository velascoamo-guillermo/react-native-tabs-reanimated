"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ExpoVectorIcon = exports.Tabs = exports.Tab = void 0;
// Main library exports
var Tab_1 = require("./components/Tab");
Object.defineProperty(exports, "Tab", { enumerable: true, get: function () { return __importDefault(Tab_1).default; } });
var Tabs_1 = require("./components/Tabs");
Object.defineProperty(exports, "Tabs", { enumerable: true, get: function () { return __importDefault(Tabs_1).default; } });
// ExpoVectorIcons component and types (optional for users who want to use it)
var ExpoVectorIcons_1 = require("./components/ExpoVectorIcons");
Object.defineProperty(exports, "ExpoVectorIcon", { enumerable: true, get: function () { return __importDefault(ExpoVectorIcons_1).default; } });
