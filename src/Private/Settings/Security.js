import Settings from "./Settings";
import { useContext, useRef } from "react";
import axios from 'axios'
import { AuthContext } from "../../context/AuthContext";

function Security(){

    const token = useContext(AuthContext);
const confirmData = new FormData();

const elConEmail = useRef("")
const elCurPass = useRef("")
const elNewPass = useRef("")

confirmData.append("email", elConEmail.current.value)
confirmData.append("currentPassword", elCurPass.current.value)
confirmData.append("newPassword", elNewPass.current.value)

axios.put('https://book-service-layer.herokuapp.com/user/secutiry', confirmData, {
    headers:{
        Authorization: token.token,
    }
}).then((res) => console.log(res))
.catch(err => console.log(err))

    return(
        <>
        <Settings/>
        <div className="security account" style={{backgroundColor:"white"}}>
           <div className="a-left">

           </div>
           <div className="a-right">
           <h2>Change Or Recover Your Password:</h2>
            <form className='a-form'>
                <div>
                <label>Email</label>
                <input ref={elConEmail} className='account-name' type="text" placeholder="Please enter your first name" />
                </div>

               <div>
               <label>Current password</label>
                <input ref={elCurPass} className='account-last' type="text" placeholder="Please enter your last name" />
               </div>

                <div className="p-e">
                    <div className="p">
                       <label>New password</label>
                       <input ref={elNewPass} type="text" placeholder="Please enter your phone" />
                    </div>
                    <div className="e">
                       <label>Confirm password</label>
                       <input type="email" placeholder="Please enter your phone" />
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
export default Security;