import React from "react";
import AppLayout from "components/AppLayout";
import {Route, Routes} from "react-router-dom";
import About from "./About";
import Home from "./Home";
import AccountsRoutes from "./accounts";

function Root(){
    return(
        <div>
            <AppLayout>
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/about" element={<About />} />
                    <Route path="/accounts/*" element={<AccountsRoutes/>} />
                </Routes>
            </AppLayout>
        </div>
    );
}

export default Root;