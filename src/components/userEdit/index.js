import React from "react";

function UserEdit (props) {
    const {handelUserEdit} = props;
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

export default UserEdit;