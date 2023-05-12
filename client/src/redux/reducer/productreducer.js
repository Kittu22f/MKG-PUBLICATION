
// export const getproductsReducer = (state = { products: [] }, action) => {
//   switch (action.type) {
//     case 'getproductSuccess':
//       return { products: action.payload };
//     case 'getProductFail':
//       return { error: action.playload };
//     default:
//       return state;
//   }
// };


export const getproductsReducer = (state = { products: [] }, action) => {
  switch (action.type) {
    case 'getproductSuccess':
      return { products: action.payload };
    case 'getProductFail':
      return { error: action.payload };
    default:
      return state;
  }
};
