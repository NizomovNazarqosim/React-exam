import { Route, Routes } from "react-router-dom";
import Jadid from "./Category/Jadid";
import Mustaqillik from "./Category/Mustaqillik";
import SinglePage from "./Category/SinglePage/SinglePage";
import Sovet from "./Category/Sovet";
import Temuriylar from "./Category/Temuriylar";
import Header from "./Pages/Header";
import Navbar from "./Pages/Navbar";

function Home(){

    return(<>
      
          <Header/>
          <Navbar/>
       
      <Routes>
         <Route path="/" element={<Temuriylar/>}  />
         <Route path="/jadid" element={<Jadid/>}/>
         <Route path="/sovet" element={<Sovet/>}/>
         <Route path="/mustaqillik" element={<Mustaqillik/>}/> 
         
         
          
      </Routes>

     
       </>
    )
}
export default Home;