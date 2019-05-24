import React, {useState, useEffect} from "react";

function Users (props) {
    const [usersData, setUsersData] = useState(null);

    useEffect(() => {
        fetch("http://localhost:3002/users")
            .then(res => res.json()).then(res => setUsersData(res));
    }, []);

    return (usersData ? <div>
        {
            usersData.length ? <ul>
                {
                    usersData.map(user => <li key={user.id}>
                        <h2>{user.firstName + user.lastName}</h2>
                        <h4>{`Age: ${user.age}`}</h4>
                    </li>)
                }
            </ul> : "No data"
        }
    </div> : <div>Loader...</div>)
}

export default Users;