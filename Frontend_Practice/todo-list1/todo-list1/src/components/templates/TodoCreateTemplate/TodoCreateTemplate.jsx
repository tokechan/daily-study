import { useNavigate } from 'react-router-dom';
import { useTodo } from '../../../Hooks/useTodo';
import { useFormValidation } from '../../../Hooks/useFormValidation';
import '../../../index.css';


export const TodoCreateTemplate = () => { 
  const navigate = useNavigate();
  const { createTodo } = useTodo();
  const {
    values,
    errors,
    setErrors,
    validateForm,
    handleChange
  } = useFormValidation({
    title: '',
    content: ''
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    if (!validateForm(values)) {
      return;
    }

    try {
      await createTodo({
        title: values.title.trim(),
        content: values.content.trim()
      });
      navigate('/');
    } catch (error) {
      setErrors(prev => ({
        ...prev,
        submit: 'Failed to create todo. Please try again.'
      }));
    }
  };

  return (
    <div className="page-container">
      <h1>Create Todo</h1>
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
          <button type="submit" className="submit-button">
            Create
          </button>
          {errors.submit && <div className="error-message submit-error">{errors.submit}</div>}
        </form>
      </div>
    </div>
  );
};