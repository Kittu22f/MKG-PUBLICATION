import { Box,TextField ,Typography,Button,styled} from '@mui/material';
import {authenticateCliants} from '../../service/api'
import Dialog from '@mui/material/Dialog';
const Component = styled(Box)`
 height:70vh;
 width:90vh;
display:flex;


`;
const Image = styled(Box)`
background:#2874f0 url(https://static-assets-web.flixcart.com/www/linchpin/fk-cp-zion/img/login_img_c4a81e.png) center 80% no-repeat;
height:100%;
width:40%;
padding : 45px 35px;
`
const Wrapper=styled(Box)`
display:flex;
flex-direction:column;
padding:25px 35px;
flex:1;
&>div,&>button,&>p(
    margin-top:20px;
    )
`
const LoginButton=styled(Button)`
text-transform:none;
background:#FB641B;
color:#fff;
height:48px;
border-radius:2px;

`;
const RequestOtp=styled(Button)`
text-transform:none;
background:#fff;
color:#2874f0;
height:48px;
border-radius:2px;
box-shadow:0 2px 4px 0 rgb(0 0 0/ 20%);
`;
const Text = styled(Typography)`
    font-size:12px;
color:#878787;
`
const LoginDialog=({open,setOpen})=>{
    const handleClose=()=>{
        setOpen(false);
    }
    return (
        <>
        <Dialog open={open} onClose={handleClose}>
        <Component>
        <Image>
            <Typography varient ="h5" >Login</Typography>
            <Typography style={{marginTop:20}}>Get access to your WishList</Typography>
        </Image>
        <Wrapper>
        <TextField variant="standard" label="enter email /Mobile Number"/>
        <TextField variant="standard" label="enter Password"/>
       <Typography  style={{marginTop:20}}>By Continue, you agree to Flipkart's term of use and private policy </Typography>
        <LoginButton  style={{marginTop:20}}>Login</LoginButton>
        <Typography  style={{marginTop:20}}>OR</Typography>
        <RequestOtp  style={{marginTop:20}}>Request OTP</RequestOtp>
        <Typography  style={{marginTop:20}}>New to flipkart? Create an account</Typography>
        </Wrapper>
        </Component>
        </Dialog>
        </>
    )

}
export default LoginDialog;