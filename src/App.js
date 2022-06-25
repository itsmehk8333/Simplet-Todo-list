import logo from './logo.svg';
import './App.css';
import Homepage from './Components/Homepage';
import Todo from './Components/Todo';

function App() {
  return (
    <div className="App">
    <h1 className="todo-title">TODO LIST</h1>
     <Homepage />
     <Todo />
    </div>
  );
}

export default App;
