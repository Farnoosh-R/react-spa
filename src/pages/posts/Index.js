import { useEffect, useState } from "react";
import ListPosts from "../../components/posts/List";

const IndexPosts = () => {

    const [posts, setPosts] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {

        fetch("https://jsonplaceholder.typicode.com/posts")
        .then(res => res.json())
        .then(data => {
            setPosts(data);
            console.log(data)
            setLoading(false);
            setError(null)
        }).catch(err => {
            setError(err.message)
            setLoading(false)
        })
        
    },[])
    
    return(
        <div style={{padding: 2 + 'em'}}>
        <h1>posts:</h1>
        {loading && <div className="spinner-border"></div>}
        {error && <div>{error}</div>}
        {posts && <ListPosts posts={posts} />}
        </div>
    );
}

export default IndexPosts;