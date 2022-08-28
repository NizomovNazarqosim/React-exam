import SignUp from "./SignUp";
import SignIn from "./SignIn";
import {Link, Routes,Route} from 'react-router-dom'
function Login(){

    return(

        <>
        {/* <SignUp/> */}
        
        
         <Routes>
            
               <Route path='/signup' element={<SignUp/>} />
               <Route path='/' element={<SignIn/>}  />
            
         </Routes>
        </>
    )
}
export default Login;