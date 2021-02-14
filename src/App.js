// import logo from './logo.svg';
import './App.css';
import Firebase from './firebase/index';
import DogBoard from './components/DogBoard';
import ToDoBoard from './components/ToDoBoard';

function App() {
  console.log(Firebase);
  console.log(Firebase.db);
  return (
    <div className="App">
      <DogBoard />
      <ToDoBoard />
    </div>
  );
}

export default App;
