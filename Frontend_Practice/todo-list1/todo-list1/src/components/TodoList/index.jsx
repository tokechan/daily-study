// eslint-disable-next-line react/prop-types

import { useNavigate } from 'react-router-dom';

export const TodoList = ({ todos, onClickDelete }) => {
  const navigate = useNavigate();

  return (
    <>
      {todos.map((todo) => (
        <div key={todo.id} className="todo-item">
          <span 
            className="todo-text"
            onClick={() => navigate(`/detail/${todo.id}`)}
            style={{ cursor: 'pointer' }}
          >
            {todo.title}
          </span>
          <button onClick={() => onClickDelete(todo)} className="delete-button">
            ×
          </button>
        </div>
      ))}
    </>
  );
};
