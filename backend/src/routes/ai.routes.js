const express = require("express");
const router = express.Router();

router.post("/get-response", async (req, res) => {
  const { code } = req.body;

  // Example response from Gemini API
  const responseFromAPI = `Reviewed code: ${code}`;

  res.json({ response: responseFromAPI });
});

module.exports = router;
