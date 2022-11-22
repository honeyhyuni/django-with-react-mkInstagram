import React from "react";
import "./AppLayout.scss";
import {Input, Menu} from "antd";
import LogoImage from "assets/instagram_main.png";

function AppLayout({children, sidebar}) {
    return(
        <div className="app">
            <div className="header">
                <h1 className="page-title">
                    <img src={LogoImage} alt="logo" style={{width:"150px"}} />
                </h1>
                <div className="search"><Input.Search /></div>
                <div className="topnav">
                    <Menu mode="horizontal">
                        <Menu.Item>메뉴1</Menu.Item>
                        <Menu.Item>메뉴2</Menu.Item>
                        <Menu.Item>메뉴3</Menu.Item>
                    </Menu>
                </div>
            </div>
            <div className="contents">{children}</div>        
            <div className="sidebar">{sidebar}</div>
            <div className="footer">&copy; Instgarm 2022.v</div>
        </div>
    );
}

export default AppLayout;