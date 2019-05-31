import React from 'react';
import {BrowserRouter as Router, Route} from "react-router-dom";
import Users from "./components/users";
import UserEdit from "./components/userEdit";
import CreateUsersForm from "./components/createUsersForm";

function App() {
  return (
    <div>
        <Router>
            <CreateUsersForm/>
            <Users/>
            <Route path="/edit" component={UserEdit}/>
        </Router>
    </div>
  );
}

export default App;
