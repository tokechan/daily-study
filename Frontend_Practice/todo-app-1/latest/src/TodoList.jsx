export default function TodoList({ todos, deleteTodo }) {
  return (
    <ul>
      {todos.map((todo) => (
        <li key={todo.id}>
          {todo.text}
          <button onClick={() => deleteTodo(todo.id)}>delete</button>
        </li>
      ))}
    </ul>
  );
}