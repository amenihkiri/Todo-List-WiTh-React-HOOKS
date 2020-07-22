import React from 'react'

function Todo({todo,}) {
    return (
        <div className="todo">
           <h2>{todo.text}</h2> 
        <button >DELETE</button>
        <button>EDIT</button>
        </div>
    )
}
export default Todo