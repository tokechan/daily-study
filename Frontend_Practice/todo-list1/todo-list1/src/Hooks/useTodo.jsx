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
    todoText,
    incompleteTodo,
    setIncompleteTodo,
    searchKeyword,
    filteredTodos,
    onChangeTodoText,
    onEnterPress,
    onClickDelete,
    onChangeInputValue,
    todos,
    createTodo,
  } = context;

  return {
    // 状態
    todoText,
    searchKeyword,
    filteredTodos,
    incompleteTodo,
    setIncompleteTodo,
    // ハンドラー
    onChangeTodoText,
    onEnterPress,
    onChangeInputValue,
    onClickDelete,
    todos,
    createTodo,
  };
};
