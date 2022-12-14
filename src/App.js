import React, { useState } from 'react';

import NewUsersForm from './components/Users/NewUsersForm';
import UserList from './components/Users/UserList';

import './App.css';

function App() {

  const[userData, setUserData] = useState('');

  const addNewUser = (newUser) => {
    const user = {
      ...newUser
    };

    setUserData((prevUserData) => [...prevUserData, user]);
  };

  return (
    <div className="App">
      <NewUsersForm onSaveUserData={addNewUser} />
      {userData.length > 0 && <UserList userItem={userData} />}
    </div>
  );
}

export default App;
