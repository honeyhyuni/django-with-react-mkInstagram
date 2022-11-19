import React from "react";
import {Route, Routes} from "react-router-dom";
import Profile from "./Profile";
import Login from "./Login";
import Signup from "./Signup";
import LoginRequiredPage from "pages/utils/LoginRequiredPages";

function AccountsRoutes(){
    return(
    <>
        <Routes>
            <Route element={<LoginRequiredPage />} >
               <Route path="/profile" element={<Profile />}/>
            </Route>
            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<Signup />} />
        </Routes>
    </>
    );
}

export default AccountsRoutes;