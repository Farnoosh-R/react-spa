import React from "react";
import { NavLink } from "react-router-dom";

const Home = () => {

    return(
        <div className="container pt-5">
        <div className="row">
            <div className="col-md-6">
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro eum, possimus aperiam laboriosam necessitatibus ut officia ratione debitis maiores. Impedit sequi officia, vel officiis ducimus eaque. Inventore alias obcaecati ratione.</p>
                <NavLink className="btn btn-dark" style={{marginRight: 1 + 'em'}} to="/users">Users</NavLink>
                <NavLink className="btn btn-outline-dark" to="/posts">Posts</NavLink>
            </div>
        </div>
        </div>
    )
}
export default Home;