const express = require("express");
const app = express();
const dotenv = require("dotenv")
dotenv.config({ path: "./.env" });

const PORT = process.env.PORT;

app.listen(PORT, () => {
  console.log(`server is running on port no. ${PORT}`);
});
