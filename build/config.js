"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.NODE_ENV = exports.PORT = void 0;
const PORT = process.env.PORT || 8080;
exports.PORT = PORT;
const NODE_ENV = process.env.NODE_ENV || "development";
exports.NODE_ENV = NODE_ENV;
