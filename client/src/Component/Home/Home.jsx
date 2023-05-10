import {useEffect} from 'react';
import NavBar from "./NavBar";
import Banner from "./Banner";
import {Box,styled} from '@mui/material';
 import {getProducts as listProducts} from '../../redux/Action/productAction';
import {useDispatch,useSelector} from 'react-redux';
const Component = styled(Box)`
padding:10x 10px,
background:#f2f2f2

`
const Home=()=>{
    const products = useSelector(state => state.getProducts);
    console.log(products);

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(listProducts())
    }, [dispatch])
    return (
<>
       <NavBar/>
       <Component>
       <Banner/>
       </Component>
        </>
    )
}
export default Home;