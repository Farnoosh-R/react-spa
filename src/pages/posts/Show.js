import React from "react";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";

const ShowPost = () => {
    
    const {postid} = useParams();
    const [post, setPost] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    
    useEffect(() => {

        fetch(`https://jsonplaceholder.typicode.com/posts/${postid}`)
        .then(res => res.json())
        .then(data => {
            setPost(data);
            console.log(data)
            setLoading(false);
            setError(null)
        }).catch(err => {
            setError(err.message)
            setLoading(false)
        })
        
    },[postid])



    return(
        <div>
        {loading && <div className="spinner-border"></div>}
        {error && <div>{error}</div>}
        {post && <div className="col-md-4" key={post.id} style={{padding: 2 + 'em'}}>
        <div className="card">
        <div className="card-header fw-bold">
        <span>{post.title}</span>
        </div>
        <div className="card-body">
        {post.body}
        </div>
      </div>
      </div>}
        </div>
    )
}
export default ShowPost;