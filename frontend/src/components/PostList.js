import React, {useEffect, useState} from "react";
import "App.scss";
import Axois from "axios";
import Post from "Post";

const apiUrl = "http://localhost:8000/api/posts/";

function PostList() {

    const [postList, setPostList] = useState([]);

    useEffect(() => {
        Axois.get(apiUrl)
        .then(response => {
                const {data} = response;
            console.log("loaded response: ", response);
            setPostList(data);
        })
        .catch(error => {
            // error.response
        })
        console.log("mounted");
    }, []);

    return(
        <div>
            <h1>Post List</h1>
            {postList.map(post => (
            <Post post = {post} key={post.id} />
        ))}
        </div>
    );
}
export default PostList;