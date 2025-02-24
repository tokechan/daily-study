import { useParams, useNavigate } from 'react-router-dom';
import { useTodo } from '../../Hooks/useTodo';
import { useFormValidation } from '../../Hooks/useFormValidation';
import '../../index.css';

export const TodoEditPage = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const { getTodoById, updateTodo } = useTodo();
  const todo = getTodoById(id);

  const {
    values,
    errors,
    setErrors,
    validateForm,
    handleChange,
  } = useFormValidation({
    title: todo?.title || '',
    content: todo?.content || '',
  });

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

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    if (!validateForm(values)) {
      return;
    }

    try {
      await updateTodo(id, {
        title: values.title.trim(),
        content: values.content.trim(),
      });
      navigate(`/detail/${id}`);
    } catch (error) {
      setErrors(prev => ({
        ...prev,
        submit: 'Failed to update todo. Please try again.'
      }));
    }
  };

  return (
    <>
      <div className="complete-area">
        <h1 className="title">Edit Todo</h1>
      </div>
      <div className="form-container">
        <form onSubmit={handleSubmit}>
          <div className="input-field">
            <input
              type="text"
              value={values.title}
              onChange={(e) => handleChange('title', e.target.value)}
              placeholder="Title"
              className={errors.title ? 'error' : ''}
            />
            {errors.title && <span className="error-message">{errors.title}</span>}
            <div className="char-counter">
              {values.title.length}/50
            </div>
          </div>
          <div className="input-field">
            <textarea
              value={values.content}
              onChange={(e) => handleChange('content', e.target.value)}
              placeholder="Content"
              rows="4"
              className={errors.content ? 'error' : ''}
            />
            {errors.content && <span className="error-message">{errors.content}</span>}
            <div className="char-counter">
              {values.content.length}/200
            </div>
          </div>
          <div className="button-group">
            <button type="button" onClick={() => navigate(`/detail/${id}`)} className="back-button">
              Cancel
            </button>
            <button type="submit" className="submit-button">
              Update
            </button>
          </div>
          {errors.submit && <div className="error-message submit-error">{errors.submit}</div>}
        </form>
      </div>
    </>
  );
};