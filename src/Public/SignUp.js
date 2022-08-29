import "./sign-up.css"
import signImg from "../images/sign-up.png"
import SignIn from "../Public/SignIn";
import { Link,Route, Routes } from "react-router-dom";
// 
import axios from "axios";
import  { useRef} from "react";
import { useNavigate} from 'react-router-dom'


function SignUp(){
    const navigate = useNavigate();

    const elFrist = useRef("")
    const elLast = useRef("")
    const elPhone = useRef("")
    const elEmail = useRef("")
    const elPassword = useRef("")



    const handleUserRegister = (e) =>{
        e.preventDefault()
        const formdata = new FormData();
  
        formdata.append('first_name', elFrist.current.value);
        formdata.append('last_name', elLast.current.value);
        formdata.append('phone', elPhone.current.value);
        formdata.append('email', elEmail.current.value);
        formdata.append('password', elPassword.current.value);

        axios
        .post('https://book-service-layer.herokuapp.com/user/register', formdata)
        .then((data) =>{
            console.log(formdata);
            console.log(data);
            if(data){
                navigate('/')
            }
        })
    }

    return(<div style={{backgroundColor:"white"}}>
        <div className="sign-up">
           <div className="left">
              <img className="sign-img" src={signImg} alt="img" />
           </div>
           <div className="right">
               <h2 className="right-title">Sign up</h2>
               <p className="right-desc">Already have an account?</p>
               <Link to="/">SignIn</Link>
               <form onSubmit={handleUserRegister} className="form">

                  <input className="input"  ref={elFrist} type="text" placeholder="First name" />
                  <input className="input" ref={elLast} type="text" placeholder="Last name" />
                  <input className="input" ref={elPhone} type="text" placeholder="Phone" />
                  <input className="input" ref={elEmail} type="e-mail" placeholder="Email" />
                  <input className="input" ref={elPassword} type="password" placeholder="Password" />

                  <button className="btn" type="submit">Next step</button>
               </form>
           </div>
        </div>
          
        </div>
    )
}
export default SignUp;