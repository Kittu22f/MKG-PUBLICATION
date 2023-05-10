import * as actionType from "../constants/roductconstant"
export const getproductsReducer=(state={products:[]},action)=>{
switch(action.type){
    case actionType.Product_success:
    return {products: action.payload}
    case  actionType.GET_Product_Fail:
 return {error:action.playload}
    default :
    return state
}

}