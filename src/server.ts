import express from "express";
import cors from "cors";

const app = express();

app.use(express.json());
app.use(cors());

import Router from "./routes/routes";
Router(app);

import { PORT } from "./config";
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
