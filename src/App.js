import './App.css';
import React, {useContext} from "react";
import Navbar from "./components/Navbar";
import AppRouter from "./components/AppRouter";
import {BrowserRouter} from "react-router-dom";
import {Context} from "./index";
import {useAuthState} from "react-firebase-hooks/auth";
import Loader from "./utils/Loader";

function App() {

    const {auth} = useContext(Context)
    const [user,loading] =  useAuthState(auth)
        if (loading){
           return <Loader/>
        }

  return (
    <BrowserRouter>
    <Navbar/>
     <AppRouter/>
    </BrowserRouter>
  );
}

export default App;
