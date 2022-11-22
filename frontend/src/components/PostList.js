import React from "react";
import Post from "./Post";
import {useAppContext} from "store";
import { Alert } from "antd";
import { axiosInstance, useAxios } from "api";


function PostList() {
    const {store:{jwtToken}} = useAppContext();

    const headers = {Authorization: `JWT ${jwtToken}`};
    const [{data:postList, loading, error}, refetch] = useAxios({
        url:"/api/posts/",
        headers,
    });
   
    const handleLike = async ({post, isLike}) => {
        const apiUrl = `api/posts/${post.id}/like/`;
        const method = isLike ? "POST" : "DELETE"
        try{
            const response = await axiosInstance(
                {
                    url: apiUrl,
                    method,
                    headers,
                }
            )
            refetch();
        }
        catch(error){

        }
    }

    return(
        <div>
            {postList && postList.length === 0 && (
                <Alert type="warning" message="포스팅이 없습니다." />
            )}
            {postList && postList.map(post => (
            <Post post = {post} key={post.id} handleLike={handleLike}/>
        ))}
        </div>
    );
}
export default PostList;
