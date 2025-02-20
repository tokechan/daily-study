import { useContext } from "react";
import { TodoContext } from "../contexts/TodoContext";

/**
 * Todoリストの状態管理とロジックを提供するカスタムフック
 * @returns {Object} Todoの状態と操作関数
 */
export const useTodo = () => {
  const { 
    todoText,
    incompleteTodo,
    searchKeyword,
    filteredTodos,
    onChangeTodoText,
    onEnterPress,
    onClickDelete,
    onChangeInputValue,
  } = useContext(TodoContext);

  return {
    // 状態
    todoText,
    searchKeyword,
    filteredTodos,
    incompleteTodo,
    // ハンドラー
    onChangeTodoText,
    onEnterPress,
    onChangeInputValue,
    onClickDelete,
  };
};
