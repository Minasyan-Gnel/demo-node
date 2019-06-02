import React, {useState} from "react";
import UsersService from "../../services/usersService";

function CreateUsersForm () {
    const [userData, setUserData] = useState(null);
    const [successMessage, setSuccessMessage] = useState("");

    const createUser = e => {
        e.preventDefault();
        UsersService
            .addUser("/users", userData)
            .then(() => {
                setSuccessMessage("Success");
                setTimeout(() => {
                    setSuccessMessage("")
                }, 1000);
            });
    };

    const changeHandler = type => e => {
        setUserData({...userData, [type]: e.target.value});
    };

    return (<div>
        <form onSubmit={createUser}>
            <label>First name</label>
            <input type="text" onChange={changeHandler("firstName")}/>
            <label>Last name</label>
            <input type="text" onChange={changeHandler("lastName")}/>
            <label>Age</label>
            <input type="number" onChange={changeHandler("age")}/>
            <button type="submit" value="Submit">Submit</button>
        </form>
        {
            successMessage ? <p>{successMessage}</p> : null
        }
    </div>)
}

export default CreateUsersForm;