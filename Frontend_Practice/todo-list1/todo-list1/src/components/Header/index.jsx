import { useNavigate } from 'react-router-dom';
import '../../index.css';

export const Header = () => {
  const navigate = useNavigate();

  return (
    <div className="header">
      <h1 className="header-title" onClick={() => navigate('/')}>
        Todo App
      </h1>
      <div className="header-buttons">
        <button 
          className="create-button"
          onClick={() => navigate('/create')}
        >
          Create Todo
        </button>
      </div>
    </div>
  );
}; 