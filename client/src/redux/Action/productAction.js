import axios from 'axios';

const URL = "http://localhost:4000";

export const getProducts=()=>async(dispatch)=>{
    try{
const {data} = await axios.get(`${URL}/products`);

dispatch({type:'success',payload:data});
    }
    catch(error)
    {
    console.log("error while calling getproduct api",error.message)
    }
}