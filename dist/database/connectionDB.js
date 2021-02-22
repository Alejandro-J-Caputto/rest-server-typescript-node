"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mysql_1 = __importDefault(require("mysql"));
const dotenv_1 = __importDefault(require("dotenv"));
dotenv_1.default.config();
// const db = new Sequelize('nodeTypeScript', 'root', process.env.passDB, {
//   host: 'localhost',
//   dialect: 'mysql',
//   port: 8889
//   // logging: false,
// });
const db = mysql_1.default.createConnection({
    host: 'localhost',
    user: 'root',
    socketPath: '/Applications/MAMP/tmp/mysql/mysql.sock',
    port: 8889,
    password: process.env.passDB,
    database: 'nodeTypeScript',
});
exports.default = db;
//# sourceMappingURL=connectionDB.js.map