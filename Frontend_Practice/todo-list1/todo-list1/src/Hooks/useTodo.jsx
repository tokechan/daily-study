import { useState } from "react";

/**
 * Todoリストの状態管理とロジックを提供するカスタムフック
 * @returns {Object} Todoの状態と操作関数
 */
export const useTodo = () => {
  // Todo入力関連の状態
  const [todoText, setTodoText] = useState("");
  const [incompleteTodo, setIncompleteTodo] = useState([]);
  
  // 検索関連の状態
  const [searchKeyword, setSearchKeyword] = useState("");

  /**
   * Todo入力フォームの値更新ハンドラー
   * @param {React.ChangeEvent<HTMLInputElement>} e 入力イベント
   */
  const onChangeTodoText = (e) => setTodoText(e.target.value);

  /**
   * Enterキーが押されたときに呼ばれるハンドラー
   * @param {KeyboardEvent} e 
   */
  const onEnterPress = (e) => {
    if (e.key === 'Enter' && todoText.trim() !== '') {
      setIncompleteTodo((prev) => [...prev, todoText]);
      setTodoText("");
    }
  };

  /**
   * 検索キーワード入力の値更新ハンドラー
   * @param {React.ChangeEvent<HTMLInputElement>} e 入力イベント
   */
  const onChangeInputValue = (e) => setSearchKeyword(e.target.value);

  /**
   * Todoの削除ハンドラー
   * @param {string} todoToDelete 削除対象のTodo
   */
  const onClickDelete = (todoToDelete) => {
    const newTodos = incompleteTodo.filter((todo) => todo !== todoToDelete);
    setIncompleteTodo(newTodos);
  };

  /**
   * 検索キーワードに基づいてフィルタリングされたTodoリスト
   */
  const filteredTodos = incompleteTodo.filter((todo) =>
    todo.toLowerCase().includes(searchKeyword.toLowerCase())
  );

  return {
    // 状態
    todoText,
    searchKeyword,
    filteredTodos,
    // ハンドラー
    onChangeTodoText,
    onEnterPress,
    onChangeInputValue,
    onClickDelete,
  };
};
