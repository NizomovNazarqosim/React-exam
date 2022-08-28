import logo from "../../images/logo.svg"
import "./header.css"
import userImg from "../../images/header.svg"
import {Link, NavLink} from 'react-router-dom'

function Header(){

    const logOutFunction = () => {
      localStorage.removeItem('token')
      
    }
    // const handleDisplay = () => {
    //     const disModal = document.querySelector('.dis-modal')
    //     const humburger = document.querySelector('.hamburger')

    //     disModal.setAttribute("class", "display-block")
    //     humburger.setAttribute("class", "display-none")
    // }
    // const handleX = () => {
    //     const disModal = document.querySelector('.dis-modal')
    //     const humburger = document.querySelector('.hamburger')

    // //     disModal.remove.classlist("display-block")
    // //  humburger.remove.classlist("display-none")

    //     disModal.setAttribute("class", "display-none")
    //     humburger.setAttribute("class", "display-block")
        
    // }


    return(
        <>
           <header className="header">
            <div className="container">
                <div className="wrapper">
                    <img src={logo} alt="" />
                    <ul className="list">
                        <li 
                        className="item"><NavLink className={({isActive}) => (isActive ? 'activelink' : 'header-a-t')}  to="/">Bosh sahifa</NavLink></li>
                        <li className="item"><NavLink to="/kitoblar" className={({isActive}) => (isActive ? 'activelink' : 'header-a-t')} >Kitoblar</NavLink></li>
                        
                    </ul>
                   <div style={{display:"flex"}}>
                   <img style={{marginRight:"20px", marginTop:"20px"}} className="user-img" src={userImg} alt="" />
                   <div className="dis-modal display-none">
                    
                    <Link className="header-a" to="/add-author">Add Author</Link>
                    <Link className="header-a" to="/add-book">Add Book</Link>
                    <Link className="header-a" to="/settings">Settings</Link>
                    <h3 onClick={logOutFunction} className="header-a logout">Log out</h3>
                    {/* <h3 onClick={handleX} className="x-logo">&#10006;</h3> */}
                </div>
                   </div>
                    {/* <h3 onClick={handleX} className="x-logo">&#10006;</h3> */}

                </div>
            </div>
        </header>
        
        </>
        
    )
}
export default Header;