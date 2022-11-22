import React from "react";
import moment from "moment";
import { Comment as AntdComment, Avatar, Tooltip } from "antd";

export default function Comment({comment}){
    const {author, message, created_at} = comment;
    const {username, name, avatar_url} = author;
    return(
        <AntdComment author={name.length===0?username:name}
            avatar={
                <Avatar
                src={avatar_url}
                alt={name.length===0?username:name}
                />
            }
            content={
                <p>
                    {message}
                </p>
            }
            datetime={
                <Tooltip title={moment().format(created_at)}>
                <span>{moment(created_at).fromNow()}</span>
                </Tooltip>
            }/>
    );
}