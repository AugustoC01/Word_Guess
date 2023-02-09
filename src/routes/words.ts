import { Router } from "express";
const wordsRouter = Router();

import { getRandomWord, getResult } from "../services/wordsService";

let word = "";

wordsRouter.get("/", (_, res) => {
  word = getRandomWord();
  res.json(word);
});

wordsRouter.post("/", (req, res) => {
  const { value } = req.body;
  const answer = getResult(value);
  res.json({ value, answer });
});

export default wordsRouter;
