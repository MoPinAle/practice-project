import React, { useState } from 'react';

import AddUser from './components/Users/AddUser';
import UsersList from './components/Users/UsersList';

const App = () => {
  const [userList, setUserList] = useState([]);

  const addUserToList = (user) => {
    setUserList(prevUserList => {
      return [user, ...prevUserList];
    });
  }

  return (
    <div>
      <AddUser onAddUser={addUserToList} />
      <UsersList users={userList} />
    </div>
  );
}

export default App;
