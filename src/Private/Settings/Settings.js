import './settings.css'
import {Link, Route, Routes, NavLink} from 'react-router-dom'
import Account from './Account'
import Security from './Security'
import Payment from './Payment'
function Settings(){

    return(
        <>
         <div className="settings">
            <div className="s-links">
                <NavLink className={({isActive}) => (isActive ? 'active-link' : 's-link')} to="/">Home</NavLink>
                <NavLink className={({isActive}) => (isActive ? 'active-link' : 's-link')} to="/settings/account">My account</NavLink>
                <NavLink className={({isActive}) => (isActive ? 'active-link' : 's-link')} to="/settings/security">Security</NavLink>
                <NavLink className={({isActive}) => (isActive ? 'active-link' : 's-link')} to="/settings/payment">Make payment</NavLink>
            </div>

        
            
         </div>
         

         
        </>
    )
}
export default Settings