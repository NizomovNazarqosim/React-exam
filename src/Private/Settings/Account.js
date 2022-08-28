import axios from 'axios';
import Settings from './Settings';
import './settings.css'
import { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../context/AuthContext';
import { useRef } from 'react';


function Account(){
const token = useContext(AuthContext)

const forData = new FormData()

const elFirst = useRef('')
const elLast = useRef('')
const elPhone = useRef('')
const elEmail = useRef('')

// const [acc, setAcc] = useState()

//   useEffect(() => {
//     axios.get('https://book-service-layer.herokuapp.com/user/me',)
//     .then(res => setAcc(res.data))
//      .catch((err) => console.log(err))
//   }, [acc.value])
forData.append("first_name", elFirst.current.value)
forData.append("last_name", elLast.current.value)
forData.append("phone", elPhone.current.value)
forData.append("email", elEmail.current.value)
  const handleChangeInfo = (e) =>{
     e.preventDefault();

     axios.put('https://book-service-layer.herokuapp.com/user/account', forData, {
        headers:{
            Authorization: token.token,
        }
     }).then((data) => console.log(data.data))
  }
    return(
        <>
        <Settings/>
        <div className="account" style={{backgroundColor:"white"}}>
           <div className="a-left">

           </div>
           <div className="a-right">
           <h2>My Profile</h2>
            <form onSubmit={handleChangeInfo} className='a-form'>
                <div>
                <label>First Name</label>
                <input ref={elFirst} className='account-name'type="text" placeholder="Please enter your first name" />
                </div>

               <div>
               <label>Last Name</label>
                <input ref={elLast} className='account-last' type="text" placeholder="Please enter your last name" />
               </div>

                <div className="p-e">
                    <div className="p">
                       <label>Phone</label>
                       <input type="text" ref={elPhone} placeholder="Please enter your phone" />
                    </div>
                    <div className="e">
                       <label>Email</label>
                       <input type="email" ref={elEmail} placeholder="Please enter your email" />
                    </div>
                </div>

  <div className='btn-wrapper'>
    <button type='submit'>Save changes</button>
  </div>
            </form>
           </div>
        </div>
        </>
    )
}
export default Account;