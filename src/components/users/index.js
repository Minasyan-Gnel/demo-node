import React, {useState, useEffect} from "react";
import {Link} from "react-router-dom";
import UsersService from "../../services/usersService";

function Users () {
    const [usersData, setUsersData] = useState(null);

    useEffect(() => {
        UsersService.getUserList("/users", data => {setUsersData(data)});
    }, []);

    return (usersData ? <div>
        {
            usersData.length ? <ul>
                {
                    usersData.map(user => <li key={user.id} className="one-user">
                        <h2>{user.firstName + user.lastName}</h2>
                        <h4>{`Age: ${user.age}`}</h4>
                        <Link to="/edit">Edit</Link>
                        <button type="button">Delete</button>
                    </li>)
                }
            </ul> : "No data"
        }
    </div> : <div>Loader...</div>)
}

export default Users;