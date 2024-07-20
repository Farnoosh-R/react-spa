import React from "react";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";

const ShowUser = () => {
    
    const {userid} = useParams();
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    
    useEffect(() => {

        fetch(`https://jsonplaceholder.typicode.com/users/${userid}`)
        .then(res => res.json())
        .then(data => {
            setUser(data);
            console.log(data)
            setLoading(false);
            setError(null)
        }).catch(err => {
            setError(err.message)
            setLoading(false)
        })
        
    },[userid])



    return(
        <div>
        {loading && <div className="spinner-border"></div>}
        {error && <div>{error}</div>}
        {user && <div className="col-md-4" key={user.id}>
        <div className="card">
        <div className="card-header fw-bold">
        <span>{user.name}</span>
        </div>
        <ul className="list-group list-group-flush">
          <li className="list-group-item">userName: {user.username}</li>
          <li className="list-group-item">Email: {user.email}</li>
          <li className="list-group-item">Phone: {user.phone}</li>
        </ul>
      </div>
      </div>}
        </div>
    )
}
export default ShowUser;