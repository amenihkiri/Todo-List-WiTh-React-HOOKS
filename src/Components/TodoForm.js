import React ,{useState} from 'react'





function TodoForm({addTodo}) {

 const[value,setValue]=useState("gggggg");

 const handlechange=event=>{
   
  setValue(event.target.value)
};

const handleClick=e=>{
      e.preventDefault();
      if(value.trim()) {
          addTodo(value);
          setValue("")
      }
};

    return (
        <div>
          <input type="text" value={value} onChange={handlechange} />  
          <button onClick={handleClick}>ADD</button>
        </div>
    )
}
export default TodoForm