import express from "express";
import cors from "cors";
import { corsOptions, PORT } from "./config";

const app = express();

app.use(express.json());

app.use(cors(corsOptions));

import Router from "./routes/routes";
Router(app);

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
