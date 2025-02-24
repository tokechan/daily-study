import { useState } from 'react';

export const useFormValidation = (initialValues = {}) => {
  const [values, setValues] = useState(initialValues);
  const [errors, setErrors] = useState({});

  const validateTitle = (title) => {
    if (!title.trim()) {
      return 'Title is required';
    }
    if (title.length > 50) {
      return 'Title must be less than 50 characters';
    }
    return '';
  };

  const validateContent = (content) => {
    if (!content.trim()) {
      return 'Content is required';
    }
    if (content.length > 200) {
      return 'Content must be less than 200 characters';
    }
    return '';
  };

  const validateForm = (formData) => {
    const newErrors = {};
    const titleError = validateTitle(formData.title);
    const contentError = validateContent(formData.content);

    if (titleError) newErrors.title = titleError;
    if (contentError) newErrors.content = contentError;

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (name, value) => {
    setValues(prev => ({
      ...prev,
      [name]: value
    }));
    
    // リアルタイムバリデーション
    if (name === 'title') {
      const error = validateTitle(value);
      setErrors(prev => ({
        ...prev,
        title: error
      }));
    }
    if (name === 'content') {
      const error = validateContent(value);
      setErrors(prev => ({
        ...prev,
        content: error
      }));
    }
  };

  return {
    values,
    errors,
    setErrors,
    validateForm,
    handleChange
  };
}; 