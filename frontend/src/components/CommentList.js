import {Input, Button} from "antd"
import React, { useState } from "react";
import { useAppContext } from "store";
import { axiosInstance, useAxios } from "api";
import Comment from "./Comment";

export default function CommentList({post}){
    const {store:{jwtToken}} = useAppContext();
    const headers = {Authorization: `JWT ${jwtToken}`};
    
    const [commentContent, setCommentContent] = useState("");

    const [{data:commentList, loading, error}, refetch] = useAxios({
        url:`/api/posts/${post.id}/comments/`,
        headers,
    });

    const handleCommentSave = async () => {
        const apiUrl = `/api/posts/${post.id}/comments/`
        try{
            await axiosInstance.post(apiUrl, {message: commentContent}, {headers});
            refetch();
            setCommentContent("");
        }
        catch(error){
            console.log('zz')
        }
    }

    return(
    <>  
        {commentList && commentList.map(comment => (
            <Comment key={comment.id} comment={comment}/>
        ))}
            <Input.TextArea style={{marginBottom: "0.5em"}}
                onChange={e => setCommentContent(e.target.value)}
                value={commentContent}/>
            <Button block type="primary" 
                disabled={(commentContent.trim()).length===0}
                onClick={handleCommentSave}>
                댓글 쓰기
            </Button>
    </>
    );
}