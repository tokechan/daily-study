import { useState } from "react";

export default function TodoForm({ addTodo }) {
  const [text, setText] = useState("");

  const handleSumit = (e) => {
    e.preventDefault();
    if (!text.trim()) return;
    addTodo(text);
    setText("");  
  };

  return (
    <form onSubmit={handleSumit}>
      <input 
      type="text"
      value={text}
      onChange={(e) => setText(e.target.value)}
      placeholder="Add a new todo"
      />
      <button type="submit">Add</button>
    </form>
  );
}