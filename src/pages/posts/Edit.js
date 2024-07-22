import { useEffect, useState } from "react";
import EditFormPost from "../../components/posts/EditFormPost";
import Swal from "sweetalert2";
import { useParams } from "react-router-dom";

const EditPost = () => {

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
        <h3>Edit Post</h3>
        {loading && <div className="spinner-border"></div>}
        {error && <div>{error}</div>}
        {post && <EditFormPost post={post} />}
        </div>
    )
}
export default EditPost