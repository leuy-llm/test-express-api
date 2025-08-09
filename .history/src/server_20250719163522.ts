import { buildServer } from "./app";
import { ENV } from "./config/env";

const start = async () => {
  const app = await buildServer(); // now returns valid Express app

  const PORT = ENV.PORT || 3000;

  app.listen(PORT, () => {
    console.log(`🚀 Server is running at http://localhost:${PORT}`);
  });
};

start();
