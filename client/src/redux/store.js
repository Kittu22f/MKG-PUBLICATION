import {createStore,combineReducers,applyMiddleware} from 'redux';
import {composeWithDevTools} from 'redux-devtools-extension';
import thunk from 'redux-thunk';
import {getproductsReducer} from './reducer/productreducer';
const reducer =combineReducers({
getProducts:getproductsReducer
      });
const middleware =[thunk];
const store=createStore(
reducer,
composeWithDevTools(applyMiddleware(...middleware))
)
export default store; 