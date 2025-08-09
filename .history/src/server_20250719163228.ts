import { buildServer } from "./app";
import { ENV } from "./config/env";

const start = async () => {
  const server: any = await buildServer();

  try {
    await server.listen({ port: ENV.PORT, host: "0.0.0.0" });
  } catch (err) {
   console.error("Server failed to start:", err); // ✅ Correct
    process.exit(1);
  }
};

start();