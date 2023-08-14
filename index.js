const express = require("express.js");
const app = express();
const PORT = process.env.PORT || 3030;

app.listen(PORT, () => {
  console.log("Server runs on: " + PORT);
});
