import { useContext } from "react";
import { TodoContext } from "../contexts/TodoContext";

/**
 * Todoリストの状態管理とロジックを提供するカスタムフック
 * @returns {Object} Todoの状態と操作関数
 */
export const useTodo = () => {
  const context = useContext(TodoContext);
  if (!context) {
    throw new Error('useTodo must be used within a TodoProvider');
  }

  const { 
    todos,
    setTodos,
    searchKeyword,
    filteredTodos,
    onChangeInputValue,
    onClickDelete,
    createTodo,
    getTodoById,
    updateTodo,
  } = context;

  return {
    todos,
    setTodos,
    searchKeyword,
    filteredTodos,
    onChangeInputValue,
    onClickDelete,
    createTodo,
    getTodoById,
    updateTodo,
  };
};
