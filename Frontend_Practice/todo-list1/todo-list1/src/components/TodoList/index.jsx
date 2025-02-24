// eslint-disable-next-line react/prop-types

export const TodoList = ({ todos, onClickDelete }) => {
  return (
    <>
      {todos.map((todo) => (
        <div key={todo.id} className="todo-item">
          <span className="todo-text">{todo.title}</span>
          <button onClick={() => onClickDelete(todo)} className="delete-button">
            ×
          </button>
        </div>
      ))}
    </>
  );
};
