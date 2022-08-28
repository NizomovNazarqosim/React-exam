import "./sign-in.css";
import SignInImg from "../images/sign-in.png"
// 
import {useContext, useRef} from "react";
import { useNavigate} from 'react-router-dom'
import { AuthContext } from "../context/AuthContext";
import { Link,Route, Routes } from "react-router-dom";
import axios from "axios";
import SignUp from "./SignUp";
function SignIn(){
 const elEmail = useRef('')
 const elPassword = useRef('')
    // const {token, setToken} = useContext(AuthContext);
    const navigate = useNavigate();
    const handleUserLogin = (e) =>{
        e.preventDefault();
    



        // const [email, password] = e.target.elements;
        const formData = new FormData();
        formData.append('email', elEmail.current.value)
        formData.append('password', elPassword.current.value)

        axios
        .post('https://book-service-layer.herokuapp.com/user/login', formData)
        .then((data) =>{
            console.log(data);
            if (data){
                window.localStorage.setItem("token", data.data.token)
                navigate('/')
            }
        })
        .catch((err) => console.log(err));
       
}
    return(
        <>
        <div className="sign-in">
           <div className="left">
              <img className="sign-in-img" src={SignInImg} alt="image" />
           </div>
           <div className="right">
                <h2 className="in-title">Sign in</h2>
                <p className="in-desc">Do not you have an account?</p>
                <Link to="/signup" elements={<SignUp/>}>Sign up</Link>
                <form  onSubmit={handleUserLogin}>
                    <input ref={elEmail} className="in-input" placeholder="Email" type="e-mail" />
                    <input ref={elPassword} className="in-input" placeholder="Password" type="password" />
                    <button className="in-btn">
                        Next step
                    </button>
                </form>
           </div>
        </div>

       
        </>
    )
}
export default SignIn;