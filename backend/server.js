const express = require("express");
const fetch = require("node-fetch");
const app = express();

app.get("/api", async (req, res) => {
  res.json({ message: "Backend working fine!" });
});

app.listen(3000, () => console.log("Backend running on port 3000"));
