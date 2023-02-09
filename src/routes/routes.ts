import { Express } from "express-serve-static-core";
import wordsRouter from "./words";

const Router = (app: Express) => {
  app.use(wordsRouter);
};

export default Router;
