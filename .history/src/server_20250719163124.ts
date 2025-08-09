import { buildServer } from "./app";
import { ENV } from "./config/env";

const start = async () => {
  const server: any = await buildServer();

  try {
    await server.listen({ port: ENV.PORT, host: "0.0.0.0" });
  } catch (err) {
    server.error(err);
    process.exit(1);
  }
};

start();