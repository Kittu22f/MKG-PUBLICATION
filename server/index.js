 import Connection from './database/db.js';
import express from 'express';
const app = express();

//  const dotenv = require("dotenv");
// dotenv.config({ path: "./../MKG PUBLICATION/.env" });
//  const dotenv = require("dotenv");
//  dotenv.config({ path: "./.env" });
// const port = process.env.PORT;
const port=8000;
 Connection();
app.listen(port, () =>{
console.log(`server is running on port no. ${port}`);
}
);

