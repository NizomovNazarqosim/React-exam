import { NavLink, Route, Routes } from "react-router-dom";
import navImg from '../images/navbar.png'
import JadBook from "./BookCategory/JadBook";
import TemBook from "./BookCategory/TemBook";
import SovBook from "./BookCategory/SovBook";
import MustBook from "./BookCategory/MustBook";
// import '../Private/Pages/navbar.css'
function NavBooks(){

    return(
        <>
           <div className="navbar">
          <img className="nav-img" src={navImg} alt="temuriylar" />
        </div>

        <div className="search-wrapper">
            <h3 className="search-title">Qidirish</h3>
            <form>
                <input className="nav-search" type="search"  placeholder="Adiblar, kitoblar, audiolar, maqolalar..."/>
                <button className="search-btn"><span>&#128269;</span>Izlash</button>
            </form>
          </div>
       
       <div className="result-wrapper">
           <h2 className="title">Asosiy kategoriyalar</h2>
           <div className="nav-links">
            <NavLink className={({isActive}) => (isActive ? 'active-navlink' : 'nav-link')} to="/kitoblar/temuriylar-kitobi">Temuriylar davri</NavLink>
            <NavLink className={({isActive}) => (isActive ? 'active-navlink' : 'nav-link')} to="/kitoblar/jadid-kitobi">Jadid adabiyoti </NavLink>
            <NavLink className={({isActive}) => (isActive ? 'active-navlink' : 'nav-link')} to="/kitoblar/sovet-kitobi">Sovet davri </NavLink>
            <NavLink className={({isActive}) => (isActive ? 'active-navlink' : 'nav-link')} to="/kitoblar/mustaqillik-kitobi">Mustaqillik davri</NavLink> 
           
           </div>
           
       </div>
      <Routes>
      <Route path="/temuriylar-kitobi" element={<TemBook/>} index/>
               <Route path="/jadid-kitobi" element={<JadBook/>}/>
               <Route path="/sovet-kitobi" element={<SovBook/>}/>
               <Route path="/mustaqillik-kitobi" element={<MustBook/>}/> 

               
      </Routes>
        </>
    )
}
export default NavBooks;