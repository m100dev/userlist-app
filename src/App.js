import React, { useState } from 'react';

import NewUsers from './components/NewUsers/NewUsers';
import UserList from './components/UserList';

import './App.css';

const DUMMY_USERS = [
  {
    id: 'e1',
    name: 'John',
    age: 55
  },
  {
    id: 'e2',
    name: 'Darren',
    age: 46
  },
  {
    id: 'e3',
    name: 'Susy',
    age: 31
  },

];

function App() {
  const[userData, setUserData] = useState(DUMMY_USERS);

  const addNewUser = (newUser) => {
    const user = {
      ...newUser
    };

    setUserData((prevUserData) => [...prevUserData, user]);
  };

  console.log(userData);

  return (
    <div className="App">
      <NewUsers onSaveUserData={addNewUser} />
      <UserList userItem={userData} />
    </div>
  );
}

export default App;
