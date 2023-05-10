import {useEffect} from 'react';
import NavBar from "./NavBar";
import Banner from "./Banner";
import {Box,styled} from '@mui/material';
import {getProducts} from '../../redux/Action/productAction';
import {useDispatch} from 'react-redux';
const Component = styled(Box)`
padding:10x 10px,
background:#f2f2f2

`
const Home=()=>{
    const dispatch = useDispatch();
    useEffect(()=>{
    dispatch(getProducts())
    },[dispatch])
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