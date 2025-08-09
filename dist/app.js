"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.buildServer = buildServer;
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
const body_parser_1 = __importDefault(require("body-parser"));
const dotenv_1 = __importDefault(require("dotenv"));
// import mainRouter from "./router/index.route";
async function buildServer() {
    dotenv_1.default.config();
    const app = (0, express_1.default)();
    // Middlewares
    app.use((0, cors_1.default)({
        origin: "*",
        methods: ["GET", "POST", "PUT", "DELETE"],
    }));
    app.use(body_parser_1.default.json());
    // Global API prefix
    // app.use(mainRouter);
    return app; // ✅ app will no longer be undefined
}
