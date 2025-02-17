// eslint-disable-next-line react/prop-types

export const TodoList = (props) => {
  const { incompleteTodo, onClickDelete } = props;

  return (
    <>
    {incompleteTodo.map((todo) => (
      <div key={todo} className="todo-item">
    <span className="todo-text">{todo}</span>
    <button onClick={() => onClickDelete(todo)} className="delete-button">
    ×
    </button> 
      </div>
    ))}
    </>
  );
};
