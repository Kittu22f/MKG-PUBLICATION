import Product from "../model/product-schema.js"
export const getProducts= async(request,response)=>{
try{
const pro = await Product.find({});
response.status(200).json(pro);
}
catch(error)
{
response.status(500).json({message:error.message})
}
}