"use strict";
// import { buildServer } from "./app";
// import { ENV } from "./config/env";
// const start = async () => {
//   const app = await buildServer(); // now returns valid Express app
//   const PORT = ENV.PORT || 3000;
//   app.listen(PORT, () => {
//     console.log(`🚀 Server is running at http://localhost:${PORT}`);
//   });
// };
// start();
const express = require('express');
const cors = require('cors');
const app = express();
app.use(cors());
app.get('/', (req, res) => {
    res.json({ message: 'Hello from Render!' });
});
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
