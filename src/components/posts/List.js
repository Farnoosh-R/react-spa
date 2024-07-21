
import React from "react";
import { Link } from "react-router-dom";
const ListPosts = ({posts}) => {

    return(
        <div className="row">
        {posts.map(post => {
            return(
         
                <div className="col-md-4" key={post.id} style={{marginBottom: 2 + 'em'}}>
                <div className="card">
                <div className="card-header fw-bold">
                <Link to={`${post.id}`}>{post.title}</Link>
                </div>
                <div className="list-group list-group-flush">
                <div className="card-body">
                {post.body}
                </div>
                </div>
              </div>
              </div>
            )
              
        })}
        </div>
        
    )
}

export default ListPosts;