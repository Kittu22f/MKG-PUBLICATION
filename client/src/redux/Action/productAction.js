import axios from "axios";


export const getProducts = () => async (dispatch) => {
  try {
    const { data } = await axios.get(`http://localhost:8000/products`);
    dispatch({ type: "getproductSuccess", payload: data });
  } catch (error) {
    dispatch({
      type: "getProductFail",
      payload: ErrorEvent.message,
    });
  }
};
