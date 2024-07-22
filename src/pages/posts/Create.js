import { useState } from "react";
import Swal from "sweetalert2";

const CreatePost = () => {

const [title, setTitle] = useState();
const [body, setBody] = useState();
const [loading, setLoading] = useState(false);
const [error, setError] = useState(null);

    function handleSubmit(e){
        e.preventDefault();

        setLoading(true);
        fetch('https://jsonplaceholder.typicode.com/posts', {
            method: 'POST',
            body: JSON.stringify({
              title: title,
              body: body,
              userId: 1,
            }),
            headers: {
              'Content-type': 'application/json; charset=UTF-8',
            },
          })
            .then((res) => res.json())
            .then(data => {
                setLoading(false)
                setError(null)
                Swal.fire({
                    title: 'Thanks!!',
                    text: 'post crrated successfully',
                    icon: 'success',
                    confirmButtonText: 'OK'
                  })
            }).catch(err => {
                setLoading(false)
                setError(err.message)
            })
    }

    return(
        <div className="container" style={{padding: 2 + 'em'}}>
        <div className="row">
        <div className="com-md-4">
        <h3>create post</h3>
        <div className="mb-3">
            <label className="form-label">Title</label>
            <input onChange={(e) => setTitle(e.target.value)} type="text" className="form-control" placeholder="title" />
            <div className="form-text text-danger">
                {title ? '' : 'title is required'}
            </div>
            </div>
            <div className="mb-3">
            <label className="form-label">Body</label>
            <textarea onChange={(e) => setBody(e.target.value)} className="form-control" rows="3" placeholder="body"></textarea>
            <div className="form-text text-danger">
            {body ? '' : 'body is required'}
        </div>
            </div>
            <button type="submit" onClick={(e) => handleSubmit(e)} className="btn btn-success" disabled={title === '' || body === ''}>
            {loading && <div className="spinner-border spinner-border-sm mr-2"></div>}
            Create</button>
            {error && <div>{error}</div>}
        </div>
        </div>
        </div>
        
    )
}

export default CreatePost;