"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const words_1 = __importDefault(require("./routes/words"));
const app = (0, express_1.default)();
app.use(express_1.default.json());
const PORT = 8080;
app.use(words_1.default);
app.get("/saludo", (_, res) => {
    console.log("Hola");
    res.end("Hola");
});
app.listen(PORT, () => {
    console.log("Server on http://localhost:8080");
});
