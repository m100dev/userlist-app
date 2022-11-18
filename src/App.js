import './App.css';
import NewUsers from './components/NewUsers/NewUsers';
import UserList from './components/UserList';

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

console.log('in app')

function App() {
  return (
    <div className="App">
      <NewUsers />
      <UserList userItem={DUMMY_USERS} />
    </div>
  );
}

export default App;
