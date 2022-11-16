import React from "react";
import "./Suggestion.scss";
import {UserOutlined}from '@ant-design/icons';
import {Button} from "antd";

export default function Suggestion(){
    return(
        <div className="suggestion">
            <div className="avatar">
                <UserOutlined />
            </div>
            <div className="username">
                Username
            </div>
            <div className="action">
                <Button size="small">Follow</Button>
            </div>
        </div>
    );
}