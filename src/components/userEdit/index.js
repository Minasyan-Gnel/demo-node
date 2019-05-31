import React from "react";

function UserEdit () {
    return (<div>
        <form>
            <label>First name</label>
            <input type="text"/>
            <label>Last name</label>
            <input type="text"/>
            <label>Age</label>
            <input type="number"/>
            <button type="submit" value="Submit">Edit</button>
        </form>
    </div>)
}

export default UserEdit;