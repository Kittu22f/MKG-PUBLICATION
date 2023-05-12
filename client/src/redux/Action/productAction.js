import axios from 'axios';

export const getProducts = () => async (dispatch) => {
    try {
        const { data } = await axios.get(`http://localhost:7000/products`);
       console.log(data);
        dispatch({ type: 'getproductSuccess', payload: data });

    } catch (error) {
        dispatch({ type:'getProductFail' , payload: error.response });
    }
};