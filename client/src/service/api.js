import axios from "axios";
const url = "http://localhost:7000";
export const authenticateLogin = async (user) => {
  try {
    return await axios.post(`${url}/login`, user);
  } catch (error) {
    console.log("Error while calling login API: ", error);
  }
};

export const authenticateSignup = async (user) => {
  try {
    return await axios.post(`${url}/signup`, user);
  } catch (error) {
    console.log("Error while calling Signup API: ", error);
  }
};
const getAllProduct = async ()=>{
  try{
    let response = await axios.get("http://localhost:7000/products");
    return response.data;
  }
  catch(error)
  {
    console.log(error);
  }
};
export default getAllProduct;
