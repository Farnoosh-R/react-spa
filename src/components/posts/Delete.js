import { useState } from "react";
import Swal from "sweetalert2"

const DeletePost = ({postid}) => {

    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

const handleDelete = () => {

    setLoading(true);
    fetch(`https://jsonplaceholder.typicode.com/posts/${postid}`, {
        method: 'DELETE',
      })
      .then(res => {
        setLoading(false)
        setError(false)
        Swal.fire({
            title: 'Deleted',
            text: `post ${postid} delete successfully`,
            icon: 'success',
            confirmButtonText: 'OK'
          })
      }).catch(err => {
        setLoading(false)
        setError(err.message)
        Swal.fire({
            title: 'Error',
            text: err.message,
            icon: 'warning',
            confirmButtonText: 'OK'
          })
      })


}

    return(
    <div className="d-inline-block">
    <button onClick={handleDelete} className="btn btn-danger me-2">
    {loading && <div className="spinner-border spinner-border-sm mr-2"></div>}
    Delete
    </button>
    {error && <div>{error}</div>}
    </div>
    )
}
export default DeletePost;