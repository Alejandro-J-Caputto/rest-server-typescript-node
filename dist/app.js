"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const dotenv_1 = __importDefault(require("dotenv"));
const models_1 = __importDefault(require("./models/models"));
//Run our global variables ex: process.env.DB..
dotenv_1.default.config();
//Instanciates our Server
const server = new models_1.default();
//Listen to the provided port
server.listen();
//# sourceMappingURL=app.js.map