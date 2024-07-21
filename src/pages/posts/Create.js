import { useState } from "react";

const CreatePost = () => {

const [title, setTitle] = useState();
const [body, setBody] = useState();

    function handleSubmit(e){
        e.preventDefault();
        console.log(title, body)
    }

    return(
        <div className="container" style={{padding: 2 + 'em'}}>
        <div className="row">
        <div className="com-md-4">
        <h3>create post</h3>
        <div className="mb-3">
            <label className="form-label">Title</label>
            <input onChange={(e) => setTitle(e.target.value)} type="text" className="form-control" placeholder="title" />
            </div>
            <div className="mb-3">
            <label className="form-label">Body</label>
            <textarea onChange={(e) => setBody(e.target.value)} className="form-control" rows="3" placeholder="body"></textarea>
            </div>
            <button type="submit" onClick={(e) => handleSubmit(e)} className="btn btn-success">Create</button>
        </div>
        </div>
        </div>
        
    )
}

export default CreatePost;