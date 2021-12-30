import React, { useEffect, useState } from "react";
import 'bootstrap/dist/css/bootstrap.css';
import { Link } from "@reach/router";
import New_post from './newPost'

const Posts = () => {
    const [posts, setPosts] = useState([]);

    useEffect(() => {
        const getPosts = async () => {
            const resp = await fetch(
                "https://square-butterfly-04dd.anandgadsing152097.workers.dev/posts"
            );
            const postsResp = await resp.json();
            setPosts(postsResp);
        };

        getPosts();
    }, []);

    return (
        <div className={"container"}>
            <div className={"row"}>
                <div className={"col-3"}>
                </div>
                <div className={"col-6"}>
                    <div>
                        <h1>Posts</h1>
                        {posts.map((post) => (
                            <div key={post.id}>
                                <div className={"pt-2"}>
                                    <div className="card">
                                        <div className="card-body">
                                            <h5 className="card-title d-inline-block">{post.username}</h5>
                                        <br/><span><b>{post.title}</b></span>
                                            {post.img && <img src={post.img} alt={""} className={"w-100 p-2"}/>}
                                            <p className="card-text">{post.content}</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
                <div className={"col-3"}>
                    {/*<h1>Create Post</h1>*/}
                    {/*<div className={"pt-2"}></div>*/}
                    {/*<New_post/>*/}
                </div>
            </div>
        </div>
    );
};

export default Posts;