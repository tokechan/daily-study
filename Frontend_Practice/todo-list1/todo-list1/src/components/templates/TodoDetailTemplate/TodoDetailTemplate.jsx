import { useParams, useNavigate } from 'react-router-dom';
import { useTodo } from '../../../Hooks/useTodo';
import '/src/index.css';

export const TodoDetailTemplate = () => {           
  const { id } = useParams();
  const navigate = useNavigate();   
  const { getTodoById, todos } = useTodo();

  console.log('ID:', id);
  console.log('Todos:', todos);

  const todo = getTodoById(id);
  
  console.log('Found Todo:', todo);

  if (!todo) {
    return (
      <div className="complete-area">
        <h1 className="title">Todo not found</h1>
        <button onClick={() => navigate('/')} className="back-button">
          Back to List
        </button>
      </div>
    );
  }

  return (
    <>
      <div className="complete-area">
        <h1 className="title">Todo Detail</h1>
      </div>
      <div className="detail-area">
        <div className="todo-detail">
          <h2>{todo.title}</h2>
          <p className="todo-content">{todo.content}</p>
          <p className="todo-date">Created: {new Date(todo.createdAt).toLocaleString()}</p>
        </div>
        <div className="button-group">
          <button onClick={() => navigate('/')} className="back-button">
            Back to List
          </button>
          <button onClick={() => navigate(`/edit/${id}`)} className="edit-button">
            Edit
          </button>
        </div>
      </div>
    </>
  );
};