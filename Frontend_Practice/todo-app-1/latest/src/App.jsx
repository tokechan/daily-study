import { useState } from 'react'
import TodoForm from "./TodoForm"
import TodoList from "./TodoList"




export default function App() {

  const [todos, setTodos] = useState([]);

  //task add function
  const addTodo = (text) => {
    if (!text.trim()) return; // 空のタスクを追加できないようにする
    const newTodo = { id: Date.now(), text, completed: false };
    setTodos([...todos, newTodo]);
  };

  //task delete function
  const deleteTodo = (id) => {
    setTodos(todos.filter(todo => todo.id !== id));
  };

  //task toggle function
  const toggleTodo = (id) => {
    setTodos(todos.map(todo =>
      todo.id === id ? { ...todo, completed: !todo.completed } : todo
    ));
  };
  
  return (
    <div className="container">
      <h1>Todo app</h1>
      <TodoForm addTodo={addTodo} />
      <TodoList 
        todos={todos} 
        deleteTodo={deleteTodo}
        toggleTodo={toggleTodo} 
      />
    </div>
  );
}