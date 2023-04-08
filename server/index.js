import Connection from "./database/db.js";
import DefaultData from "./Default.js";
import dotenv from "dotenv";
import express from "express";
const app = express();
dotenv.config();
const USERNAME= process.env.DB_UserName;
const PASSWORD =process.env.DB_Password;
//  const dotenv = require("dotenv");
// dotenv.config({ path: "./../MKG PUBLICATION/.env" });
//  const dotenv = require("dotenv");
//  dotenv.config({ path: "./.env" });
// const port = process.env.PORT;
const port = 7000;
Connection(USERNAME,PASSWORD);
app.listen(port, () => {
console.log(`server is running on port no. ${port}`);
DefaultData();
});
