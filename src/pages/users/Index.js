import { useEffect, useState } from "react";

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
        <div>
        <h1>users</h1>
        {loading && <div className="spinner-border"></div>}
        {error && <div>{error}</div>}
        {users && users.map(user => {
            return <h3 key={user.id}>{user.name}</h3>
        })}
        </div>
    );
}

export default IndexUsers;