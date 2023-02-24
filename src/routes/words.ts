import { Router } from "express";
const wordsRouter = Router();

import {
  getRandomWord,
  // getResult,
  // getResult,
  testGetResult,
} from "../services/wordsService";

// let word = "";

wordsRouter.get("/", (_, res) => {
  const word = getRandomWord();
  res.json(word);
});

wordsRouter.post("/", (_req, res) => {
  // const { value } = req.body;
  const result = testGetResult("PERRO", "PODER", true);
  res.json(result);
});

export default wordsRouter;
