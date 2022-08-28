import Header from "./Pages/Header";
import navImg from '../images/navbar.png'
import { Link, Route, Routes } from "react-router-dom";
import './books.css'
import NavBooks from "./NavBooks";
import SingleBook from "./Category/SinglePage/SingleBook";

function Books(){

    return(
      <>
        <Header/>
        {/*  */}
        <NavBooks/>

       
         {/* */}
        {/* <div className="navbar">
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
           
           
       </div>
       <div className="Links">
            <Link to="/temuriylar-kitobi">Temuriylar davri</Link>
            <Link to="/jadid-kitobi">Jadid adabiyoti </Link>
            <Link to="/sovet-kitobi">Sovet davri </Link>
            <Link to="/mustaqillik-kitobi">Mustaqillik davri</Link> 
           </div>
         */}
      </>   
    )
}
export default Books;