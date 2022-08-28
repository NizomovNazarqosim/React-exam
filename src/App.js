import './App.css';
import SignIn from './Public/SignIn';
import Header from "./Private/Pages/Header"
import Navbar from './Private/Pages/Navbar';
import Login from './Public/Login';
import Home from './Private/Home';
import Wrapper from './Private/Wrapper'

import { useAuth } from './hook/useAuth';
import { Route, Routes } from 'react-router-dom';
import SinglePage from './Private/Category/SinglePage/SinglePage';
import SignUp from './Public/SignUp';
import AddAuthor from './Private/Add/AddAuthor';
import AddBook from './Private/Add/AddBook';

function App() {
const {token} = useAuth();


  return (
    <div className="App">

     {
       token ?  <Wrapper/> : <Login/> 
     }
  
     
    </div>
  );
}

export default App;
