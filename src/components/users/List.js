
import React from "react";
const ListUsers = ({users}) => {

    return(
        <div className="row">
        {users.map(user => {
            return(
         
                <div className="col-md-4" key={user.id} style={{marginBottom: 2 + 'em'}}>
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
              </div>
            )
              
        })}
        </div>
        
    )
}

export default ListUsers;