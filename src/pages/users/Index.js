import { useEffect, useState } from "react";
import ListUsers from "../../components/users/List";

const IndexUsers = () => {

    const [users, setUsers] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {

        fetch("https://jsonplaceholder.typicode.com/users")
        .then(res => res.json())
        .then(data => {
            setUsers(data);
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
        <h1>users:</h1>
        {loading && <div className="spinner-border"></div>}
        {error && <div>{error}</div>}
        {users && <ListUsers users={users} />}
        </div>
    );
}

export default IndexUsers;