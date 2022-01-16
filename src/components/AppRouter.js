import React, {useContext} from 'react';
import {CHAT_ROUTE, LOGIN_ROUTE} from "../utils/consts";
import {Route , Routes } from "react-router-dom";
import Chat from "./Chat";
import Login from "./Login";
import {Context} from "../index";
import {useAuthState} from "react-firebase-hooks/auth";


const AppRouter = () => {
    const {auth} = useContext(Context)
    const [user] =  useAuthState(auth)

    return user ? (
        <Routes>
         <Route key={CHAT_ROUTE} path={CHAT_ROUTE} element={<Chat/>}/>
         <Route key={CHAT_ROUTE} path={"*"}  element={<Chat/>} />
        </Routes>

    ) :
        (
            <Routes>
              <Route key={LOGIN_ROUTE} path={LOGIN_ROUTE} element={<Login/>}/>
              <Route key={LOGIN_ROUTE} path={"*"}  element={<Login/>} />
            </Routes>
        )
};

export default AppRouter;