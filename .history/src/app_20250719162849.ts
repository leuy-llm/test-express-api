import express from "express";
import cors from "cors";
import bodyParser from "body-parser";
import dotenv from "dotenv";
import mysql from "./plugins/db";
import mainRouter from "./router/index.route";
export async function buildServer() {
  dotenv.config();

  const app = express();

  // Middlewares
  app.use(cors({
  origin: '*',
  credentials: true,
  methods:['GET', 'POST', 'PUT', 'DELETE']
}));
  app.use(mysql);
  app.use(bodyParser.json());

  // Global API prefix
  app.use(mainRouter);
}
