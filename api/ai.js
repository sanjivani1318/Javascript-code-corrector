const express = require("express");
const cors = require("cors");
const serverless = require("serverless-http");
const aiRoutes = require("../src/routes/ai.routes"); // your existing routes

const app = express();
app.use(cors());
app.use(express.json());

app.use("/ai", aiRoutes);

module.exports = app;
module.exports.handler = serverless(app);
