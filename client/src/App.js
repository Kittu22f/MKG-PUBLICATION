
 import Header from "./Component/Header/Header";
 import Home from "./Component/Home/Home";
 import { Box } from "@mui/material";
  import ContextProvider from "./Context/ContextProvider";
function App() {
  return (
    <>

 <ContextProvider> 
 <Header/>
 <Box style={{ marginTop: 54 }}>
 <Home />
</Box>

       </ContextProvider> 
      </>
 
  );
}
export default App;
