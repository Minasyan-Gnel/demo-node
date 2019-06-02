import React, {useState, useEffect} from "react";
import PropTypes from "prop-types";
import UsersService from "../../services/usersService";

function UserEdit (props) {
    const {handelUserEdit, userId} = props;
    const [dataForUpdate, setDataForUpdate] = useState({});

    const changeHandler = type => e => {
        setDataForUpdate({...dataForUpdate, [type]: e.target.value});
    };

    const editHandler = e => {
        e.preventDefault();
        UsersService.updateUser("/edit", dataForUpdate).then(handelUserEdit(null));
    };

    useEffect(() => {
        UsersService.getUserById("/user", {id: userId}).then(setDataForUpdate);
    }, [userId]);

    return (<div>
        <form onSubmit={editHandler}>
            <label>First name</label>
            <input type="text" value={dataForUpdate.firstName || ""} placeholder="First name" onChange={changeHandler("firstName")}/>
            <label>Last name</label>
            <input type="text" value={dataForUpdate.lastName || ""} placeholder="Last name" onChange={changeHandler("lastName")}/>
            <label>Age</label>
            <input type="number" value={dataForUpdate.age || ""} placeholder="Age" onChange={changeHandler("age")}/>
            <input type="submit" value="Edit"/>
            <button onClick={handelUserEdit(null)}>Close</button>
        </form>
    </div>)
}

UserEdit.propTypes = {
    handelUserEdit: PropTypes.func,
    userId: PropTypes.number
};

UserEdit.defaultProps = {
    handelUserEdit: () => {}
};

export default UserEdit;