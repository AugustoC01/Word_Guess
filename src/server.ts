import express from "express";
import wordsRouter from "./routes/words";

const app = express();

app.use(express.json());

const PORT = 8080;

app.use(wordsRouter);

app.get("/saludo", (_, res) => {
  console.log("Hola");
  res.end("Hola");
});

app.listen(PORT, () => {
  console.log("Server on http://localhost:8080");
});
