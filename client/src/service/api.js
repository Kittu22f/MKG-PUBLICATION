import axios from 'axios'
const url = 'http://localhost:8000';
export const authenticateCliants= async(data)=>{
    try{
  return 
  await axios.post(`${url}/signup`, data)
    }
    catch(error)
    {
console.log('error while  sign up ',error);
    }
}

