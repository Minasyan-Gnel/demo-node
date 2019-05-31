import React, {useEffect} from "react";
import PropTypes from "prop-types";
import UsersService from "../../services/usersService";

function UserEdit (props) {
    const {handelUserEdit, userId} = props;

    useEffect(() => {
        UsersService.getUserById(userId);
    }, [userId]);

    return (<div>
        <form>
            <label>First name</label>
            <input type="text"/>
            <label>Last name</label>
            <input type="text"/>
            <label>Age</label>
            <input type="number"/>
            <button type="submit" value="Submit">Edit</button>
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