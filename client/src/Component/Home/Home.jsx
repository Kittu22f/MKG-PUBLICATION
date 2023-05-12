import {useEffect} from 'react';
import NavBar from "./NavBar";
import Banner from "./Banner";
import {Box,styled} from '@mui/material';
 import { getProducts } from '../../redux/Action/productAction';
import {useDispatch,useSelector} from 'react-redux';
import {SSS} from './Sss'
const Component = styled(Box)`
padding:10x 10px,
background:#f2f2f2

`
// const Home=()=>{
//     const { Products } = useSelector(state => state.getProducts);
   
// console.log(Products);
//     const dispatch = useDispatch();

//     useEffect(() => {
//         dispatch(listProducts())
//     }, [dispatch])
//     return (
// <>
//        <NavBar/>
//        <Component>
//        <Banner/>
//          <SSS products = {Products}/> 
//        </Component>
//         </>
//     )
// }


const Home = () => {
    const { Products } = useSelector(state => state.getProducts);
    const dispatch = useDispatch();
  
    useEffect(() => {
      dispatch(getProducts());
    }, [dispatch]);
  
    return (
      <>
        <NavBar/>
        <Component>
          <Banner/>
          {Products && Products.length > 0 ? (
            <SSS products={Products}/> 
          ) : (
            <p>No products found.</p>
          )}
        </Component>
      </>
    );
  };
  
export default Home;