"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const wordsRouter = (0, express_1.Router)();
const wordsService_1 = require("../services/wordsService");
let word = "";
wordsRouter.get("/", (_, res) => {
    word = (0, wordsService_1.getRandomWord)();
    res.json(word);
});
wordsRouter.post("/", (req, res) => {
    const { value } = req.body;
    const answer = (0, wordsService_1.getResult)(value);
    res.json({ value, answer });
});
exports.default = wordsRouter;
