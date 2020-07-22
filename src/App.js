import React ,{useState} from 'react';
import logo from './logo.svg';
import './App.css';
import TodoForm from "./Components/TodoForm";
import Todo from "./Components/Todo";





function App() {

  const [todos,setTodos]=useState([
    {text:"learn hooks"},
    {text:"learn React Component"},
   
  ]);

  const addTodo =text=>{
    const newTodo=[...todos,{text}]
    setTodos(newTodo)
  }
  



  return (
    <div className="App">
      {todos.map(todo=>
     <Todo todo={todo}/>
     )}

     <TodoForm addTodo={addTodo}/>
    </div>
  );
}

export default App;
