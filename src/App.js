
import './App.css';
import Homepage from './Components/Homepage';
import Todo from './Components/Todo';

function App() {
  return ( 
    <div className="App">
   <div style={{width:"500px" , border:"1px solid #6A7ECE" , padding:"10px 100px", background:"#6A7ECE", marginTop:"50px"}}>
   <h1 className="todo-title">TODO LIST</h1>
     <Homepage />
     <Todo />
   </div>
    </div>
  );
}

export default App;
