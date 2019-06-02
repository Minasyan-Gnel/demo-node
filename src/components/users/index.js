import React, {useState, useEffect} from "react";
import UsersService from "../../services/usersService";

function Users (props) {
    const {handelUserEdit} = props;
    const [usersData, setUsersData] = useState(null);

    useEffect(() => {
        UsersService.getUsersList("/users").then(setUsersData);
    }, []);

    return (usersData ? <div>
        {
            usersData.length ? <ul>
                {
                    usersData.map(user => <li key={user.id} className="one-user">
                        <h2>{user.firstName + " " + user.lastName}</h2>
                        <h4>{`Age: ${user.age}`}</h4>
                        <button type="button" onClick={handelUserEdit(user.id)}>Edit</button>
                        <button type="button">Delete</button>
                    </li>)
                }
            </ul> : "No data"
        }
    </div> : <div>Loader...</div>)
}

export default Users;