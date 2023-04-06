import { AppBar, Toolbar,Box, styled,Typography } from "@mui/material";
import Search from "./Search";
import CustomButton from "./CustomButton";
const HeaderStyle = styled(AppBar)`
background:#2874f0;
height:55px;
`;
const Component = styled(Box)`
margin-left:12%;
line-height:0;
`
const SubHeading = styled(Typography)`
font-size:10px;
font-style:italic;
`
const plusImage= styled('img')
(
{
width:10
}
)
const CustomButtonWrapper = styled(Box)`
margin:0 5% 0 auto;`
const Header = () => {
    const logoURL = 'https://static-assets-web.flixcart.com/www/linchpin/fk-cp-zion/img/flipkart-plus_8d85f4.png';
    const subURL = 'https://static-assets-web.flixcart.com/www/linchpin/fk-cp-zion/img/plus_aef861.png';

    return (
    <HeaderStyle>
      <Toolbar style={{minHeight:55}}>
        <Component>
<img src={logoURL} alt = "logo" style={{width:75} }/>
<Box >
<SubHeading>Explore &nbsp;
<Box component='span' style= {{color:'yellow'}}>Plus</Box>
</SubHeading>
<plusImage src={subURL} alt="sublogo"/>
</Box>
</Component>
<Search/>
<CustomButtonWrapper>
  <CustomButton/>
</CustomButtonWrapper>
</Toolbar>
</HeaderStyle>
  );
};
export default Header;
