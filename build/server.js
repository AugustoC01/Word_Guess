"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const app = (0, express_1.default)();
app.use(express_1.default.json());
const routes_1 = __importDefault(require("./routes/routes"));
(0, routes_1.default)(app);
const config_1 = require("./config");
app.listen(config_1.PORT, () => {
    console.log(`Server on http://localhost:${config_1.PORT}`);
});
