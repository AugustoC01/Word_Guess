import { Router } from "express";
const wordsRouter = Router();

import { getRandomWord, getResult } from "../services/wordsService";

// let word = "";

wordsRouter.get("/", (_, res) => {
  const word = getRandomWord();
  res.json(word);
});

wordsRouter.post("/", (req, res) => {
  const { value } = req.body;
  const result = getResult(value);
  res.json(result);
});

export default wordsRouter;
