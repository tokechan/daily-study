import { useState } from "react"
import "./index.css"

export const Todo = () => {

  const [incompleteTodo, setIncompleteTodo] = useState(["test1", "test2"]);
  return (
    <>  
    <div className="complete-area">
      <h1 className="title">Todo App</h1>
    </div>
    <div className="input-area">
      {/* <p>Add Todo</p> */}
      <input type="text" placeholder="Add a Todo"/>
    </div>
    <div className="incomplete-area">
      <p className="title">Todo List</p>
      {incompleteTodo.map((todo) => (
        <p key={todo}>{todo}</p>
      ))}
    </div>
    </>
  )
}

 