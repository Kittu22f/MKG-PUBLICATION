import mongoose from "mongoose";
export const Connection = async(username,password) =>{

const URL=`mongodb://${username}:${password}@ac-8trwrgs-shard-00-00.xeynswu.mongodb.net:27017,ac-8trwrgs-shard-00-01.xeynswu.mongodb.net:27017,ac-8trwrgs-shard-00-02.xeynswu.mongodb.net:27017/?ssl=true&replicaSet=atlas-136pgj-shard-0&authSource=admin&retryWrites=true&w=majority`;
try
{  
await mongoose.connect( URL);
console.log("database Connecte Successfully");
} 
catch (error) 
{
console.log("error while connecting ", error.message);
}
};
export default Connection;
//,{useUnifiedTopology:true, useNewUrlParser:true //