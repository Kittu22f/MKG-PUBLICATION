import { InputBase,Box,styled } from "@mui/material"
import SearchIcon from '@mui/icons-material/Search';
const SearchContainer= styled(Box)`
background-color:#fff;
width:38%;
border-radius:2px;
margin-left:10px;
display:flex;
`
const InputSearchBase = styled(InputBase)`
padding-left:10px;
width:100%;
color:black;
`;
const SWrapper = styled(Box)`
color:blue;
padding:5px;
`
const Search=()=>{
return(

    <SearchContainer>
    <InputSearchBase placeholder="search for products , brands and more....."/>
    <SWrapper>
    <SearchIcon/>
    </SWrapper>
    </SearchContainer>
)
}
export default Search