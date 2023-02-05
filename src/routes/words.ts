import { Router } from "express";
const wordsRouter = Router();

import { checkWord, getRandomWord } from "../services/wordsService";

let word = "";

wordsRouter.get("/", (_, res) => {
  word = getRandomWord();
  res.json(word);
});

wordsRouter.post("/", (req, res) => {
  const { value } = req.body;
  const answer = checkWord(word, value);
  res.json({ word, value, answer });
});

export default wordsRouter;
