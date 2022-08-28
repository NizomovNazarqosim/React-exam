import { Route, Routes } from "react-router-dom";
import Books from "./Books";
import Jadid from "./Category/Jadid";
import Mustaqillik from "./Category/Mustaqillik";
import SinglePage from "./Category/SinglePage/SinglePage";
import Sovet from "./Category/Sovet";
import Temuriylar from "./Category/Temuriylar";
import Home from "./Home";
// 
import TemBook from './BookCategory/TemBook'
import JadBook from './BookCategory/JadBook'
import SovBook from './BookCategory/SovBook'
import MustBook from './BookCategory/MustBook'
import SingleBook from "./Category/SinglePage/SingleBook";
import AddAuthor from "./Add/AddAuthor";
import AddBook from "./Add/AddBook";
import Settings from "../Private/Settings/Settings";
import Account from "./Settings/Account";
import Security from "./Settings/Security";
import Payment from "./Settings/Payment";
import SetWrap from "./Settings/SetWrap";


function Wrapper(){
    return(
        <>
        <Routes>
<Route path="/add-author" element={<AddAuthor/>}/>
<Route path="/add-book" element={<AddBook/>}/>
<Route path="/settings" element={<SetWrap/>}/>
            <Route path="/" element={<Home/>}>
               <Route path="/temuriylar" element={<Temuriylar/>} index/>
               <Route path="/jadid" element={<Jadid/>}/>
               <Route path="/sovet" element={<Sovet/>}/>
               <Route path="/mustaqillik" element={<Mustaqillik/>}/>
               <Route path="/sing" element={<SinglePage/>}/>
               
           </Route>
           <Route path="/kitoblar" element={<Books/>}>
               <Route path="/kitoblar/temuriylar-kitobi" element={<TemBook/>} index/>
               <Route path="/kitoblar/jadid-kitobi" element={<JadBook/>}/>
               <Route path="/kitoblar/sovet-kitobi" element={<SovBook/>}/>
               <Route path="/kitoblar/mustaqillik-kitobi" element={<MustBook/>}/>
           </Route>
           {/* <Route path="/temuriylar-kitobi" element={<TemBook/>} index/>
               <Route path="/jadid-kitobi" element={<JadBook/>}/>
               <Route path="/sovet-kitobi" element={<SovBook/>}/>
               <Route path="/mustaqillik-kitobi" element={<MustBook/>}/> */}
     <Route path="/singlepage/:id" element={<SinglePage/>}></Route>    
          <Route path="/singlebook/:id" element={<SingleBook/>}/>
         

            <Route path='/settings/account' element={<Account/>} index/>
            <Route path='/settings/security' element={<Security/>}/>
            <Route path='/settings/payment' element={<Payment/>}/>

</Routes>
        </>
    )
}
export default Wrapper;