import { useState, createContext, useEffect } from "react";

export const AuthContext = createContext();

export const AuthProvider = ({children}) =>{
    const localData = (localStorage.getItem("token"));
     const [token, setToken]= useState(localData || '');


    //  useEffect(() => {
    //     if(token){
    //         localStorage.setItem("token", JSON.stringify(token))

    //     } else{
    //         localStorage.removeItem('token')
    //     }
        
    //  },[])

     return(
        <AuthContext.Provider value={{token, setToken}}>
            {children}
        </AuthContext.Provider>
     )
}