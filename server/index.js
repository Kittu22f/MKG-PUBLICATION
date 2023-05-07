import Connection from "./database/db.js";
import DefaultData from "./Default.js";
import dotenv from "dotenv";
import express from "express";
import router from "./routes/route.js";
import cors from 'cors';
import bodyParser from "body-parser";
const app = express();
dotenv.config();
app.use(cors());
app.use(bodyParser.json({extended:true}));

app.use('/', router);
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
