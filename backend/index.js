const express = require("express");
require("dotenv").config();
const cors = require("cors");
const aiRoutes = require("./src/routes/ai.routes"); // ✅ Correct path

const app = express();
const PORT = 3002;
app.use(cors()); // ✅ Allow all origins for now
// ✅ Middleware to parse JSON
app.use(express.json());

app.use('/ai', aiRoutes);
 // ✅ Use the router
 app.get("/", (req, res) => {
  res.send("✅ Backend is running!");
});


app.listen(PORT, () => {
  console.log("server started");
});