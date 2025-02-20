import { useState, useContext } from 'react';
import { TodoContext } from '../../contexts/TodoContext';

// eslint-disable-next-line react/prop-types
export const AddTodo = () => {
  // ローカルで入力状態を管理
  const [todoText, setTodoText] = useState("");
  const { setIncompleteTodo } = useContext(TodoContext);

  const onChangeTodoText = (e) => setTodoText(e.target.value);

  const onEnterPress = (e) => {
    if (e.key === 'Enter' && todoText.trim() !== '') {
      setIncompleteTodo((prev) => [...prev, todoText]);
      setTodoText("");
    }
  };

  return (
    <input
      type="text"
      value={todoText}
      onChange={onChangeTodoText}
      onKeyPress={onEnterPress}
      placeholder="TODOを入力"
    />
  );
};



