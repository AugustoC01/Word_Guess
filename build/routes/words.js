"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const wordsRouter = (0, express_1.Router)();
const words4_json_1 = __importDefault(require("../Mocks/words4.json"));
const getRandomWord = () => {
    let i = Math.trunc(Math.random() * words4_json_1.default.length);
    console.log("i::: ", i);
    return words4_json_1.default[i];
};
wordsRouter.get("/", (_, res) => {
    const word = getRandomWord();
    res.json(word);
});
exports.default = wordsRouter;
