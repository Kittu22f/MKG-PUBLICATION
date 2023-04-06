const express = require("express");
const app = express();
 const dotenv = require("dotenv");
dotenv.config({ path: "./../MKG PUBLICATION/.env" });
// const dotenv = require("dotenv");
// dotenv.config({ path: "./.env" });
const port = process.env.PORT;
app.listen(port, () => {
  console.log(`server is running on port no. ${port}`);
});
