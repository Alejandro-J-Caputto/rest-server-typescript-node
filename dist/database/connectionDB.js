"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.dbMysql = exports.db = void 0;
const sequelize_1 = require("sequelize");
const mysql_1 = __importDefault(require("mysql"));
const dotenv_1 = __importDefault(require("dotenv"));
dotenv_1.default.config();
exports.db = new sequelize_1.Sequelize('nodeTypeScript', 'root', process.env.passDB, {
    host: 'localhost',
    dialect: 'mysql',
    port: 8889
    // logging: false,
});
exports.dbMysql = mysql_1.default.createConnection({
    host: 'localhost',
    user: 'root',
    socketPath: '/Applications/MAMP/tmp/mysql/mysql.sock',
    port: 8889,
    password: process.env.passDB,
    database: 'nodeTypeScript',
});
//# sourceMappingURL=connectionDB.js.map