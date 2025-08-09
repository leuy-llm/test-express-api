"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const promise_1 = __importDefault(require("mysql2/promise"));
const env_1 = require("../config/env");
// Create MySQL connection pool
const db = promise_1.default.createPool({
    host: env_1.ENV.MYSQL_HOST,
    port: env_1.ENV.MYSQL_PORT,
    user: env_1.ENV.MYSQL_USER,
    password: env_1.ENV.MYSQL_PASSWORD,
    database: env_1.ENV.MYSQL_DATABASE,
});
exports.default = db;
