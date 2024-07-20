import React from "react";
import { useParams } from "react-router-dom";

const ShowUser = () => {

const {userid} = useParams();

    return(
        <h3>show user: {userid}</h3>
    )
}
export default ShowUser;