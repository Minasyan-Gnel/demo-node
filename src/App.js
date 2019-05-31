import React, {useState, useCallback} from 'react';
import Users from "./components/users";
import UserEdit from "./components/userEdit";
import CreateUsersForm from "./components/createUsersForm";

function App() {
    const [editUserId, setEditUserId] = useState(null);

    const handelUserEdit = useCallback(id => () => setEditUserId(id), []);

    return (
        <div>
            <CreateUsersForm/>
            <Users handelUserEdit={handelUserEdit}/>
            {editUserId ? <UserEdit userId={editUserId} handelUserEdit={handelUserEdit}/> : null}
        </div>
      );
}

export default App;
