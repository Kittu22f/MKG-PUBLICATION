import axios from 'axios';
import * as actionType from '../constants/roductconstant'
const URL = "http://localhost:4000";

export const getProducts=()=>async(dispatch)=>{
    try{
const {data} = await axios.get(`${URL}/products`);

dispatch({type:'Product_success',payload:data});
    }
    catch(error)
    {
        dispatch({type:'GET_Product_Fail',payload:ErrorEvent.message});
    }
}