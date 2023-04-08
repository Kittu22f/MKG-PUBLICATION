import { Box,Button, Typography,styled } from "@mui/material";
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import LoginDialog from "../login/LoginDailog";
import { useState } from "react";
const Wrapper = styled(Box)`
display:flex;
margin:0 3% 0 auto;
&>button, &>p ,&>div
{
margin-right:40px;
font-size:16px;
align-item:center;
}
`
const LoginButton = styled(Button )`
background:#2874f0;
text-transform:none;
padding: 5px 40px;
border-radius :2px;
box-shadow :none;
font-weight:600;
height:32px;
`
const Container = styled(Box)`
display:flex;
`

const CustomButton=()=>{
    const[open,setOpen]=useState(false);
    const openDialog=()=>{
        setOpen(true);
    }
return (
<>
<Wrapper>
<LoginButton variant="contained" onClick={()=>openDialog()} >Login</LoginButton>
<Typography style={{marginTop: 3, width:135}}>Become a Seller</Typography>
<Typography style={{marginTop:3}}>More</Typography>
<Container>
<ShoppingCartIcon/>
<Typography>Cart</Typography>
</Container>
<LoginDialog open={open} setOpen={setOpen}/>
</Wrapper>
</>  
)
}
export default CustomButton;