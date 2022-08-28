import "./navbar.css"
import navImg from "../../images/navbar.png"
import Temuriylar from '../Category/Temuriylar'
import Jadid from '../Category/Jadid'
import Sovet from '../Category/Sovet'
import Mustaqillik from '../Category/Mustaqillik'


import {NavLink, Routes, Route} from 'react-router-dom'
import SinglePage from "../Category/SinglePage/SinglePage"
function Navbar(){

    return(

       <dic className="nav-card">
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
            <NavLink className={({isActive}) => (isActive ? 'active-navlink' : 'nav-link')} to="/">Temuriylar davri</NavLink>
            <NavLink className={({isActive}) => (isActive ? 'active-navlink' : 'nav-link')} to="/jadid">Jadid adabiyoti </NavLink>
            <NavLink className={({isActive}) => (isActive ? 'active-navlink' : 'nav-link')} to="/sovet">Sovet davri </NavLink>
            <NavLink className={({isActive}) => (isActive ? 'active-navlink' : 'nav-link')} to="/mustaqillik">Mustaqillik davri</NavLink> 
           
           </div>
           
       </div>
      
       </dic>
    )
}
export default Navbar;