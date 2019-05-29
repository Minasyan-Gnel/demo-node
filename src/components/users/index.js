import React, {useState, useEffect} from "react";
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