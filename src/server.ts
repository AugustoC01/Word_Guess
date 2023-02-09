import express from "express";

const app = express();

app.use(express.json());

import Router from "./routes/routes";
Router(app);

import { PORT } from "./config";
app.listen(PORT, () => {
  console.log(`Server on http://localhost:${PORT}`);
});
