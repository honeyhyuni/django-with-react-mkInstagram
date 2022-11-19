import React from "react";
import AppLayout from "components/AppLayout";
import {Route, Routes} from "react-router-dom";
import About from "./About";
import Home from "./Home";
import AccountsRoutes from "./accounts";
import LoginRequiredPage from "./utils/LoginRequiredPages";

function Root(){
    return(
        <div>
            <AppLayout>
                <Routes>
                    <Route element={<LoginRequiredPage />}>
                        <Route path="/" element={<Home />} />
                    </Route>
                    <Route path="/about" element={<About />} />
                    <Route path="/accounts/*" element={<AccountsRoutes/>} />
                </Routes>
            </AppLayout>
        </div>
    );
}

export default Root;