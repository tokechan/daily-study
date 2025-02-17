import { useState } from "react"
import "../index.css"
import { AddTodo } from "../components/AddTodo";
import { TodoList } from "../components/TodoList";
import { SearchTodo } from "../components/SearchTodo";

/**
 * Todoアプリケーションのメインコンポーネント
 * Todoの追加、検索、削除機能を提供する
 * @returns {JSX.Element} Todoアプリケーションの画面
 */
export const Todo = () => {

  /**
   * Todo入力フォームの状態管理
   * @type {[string, function]} テキストの値と更新関数
   */
  const [todoText, setTodoText] = useState("");

  /**
   * 未完了Todoリストの状態管理
   * @type {[Array<string>, function]} Todoリストの配列と更新関数
   */
  const [incompleteTodo, setIncompleteTodo] = useState([]);

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
    if (e.key === 'Enter') {
      // Todoリストに新しいTodoを追加する
      setIncompleteTodo([...incompleteTodo, todoText]);
      // 入力フォームをクリアする
      setTodoText("");
    }
  };

  /**
   * 検索キーワードの状態管理
   * @type {[string, function]} 検索テキストの値と更新関数
   */
  const [searchKeyword, setSearchKeyword] = useState("");

  /**
   * 検索キーワード入力の値更新ハンドラー
   * @param {React.ChangeEvent<HTMLInputElement>} e 入力イベント
   */
  const onChangeInputValue = (e) =>  setSearchKeyword(e.target.value);

  /**
   * 検索キーワードに基づいてTodoリストをフィルタリング
   * @type {Array<string>} フィルタリングされたTodoリスト
   */
  const filteredTodos = incompleteTodo.filter((todo) =>
    todo.toLowerCase().includes(searchKeyword.toLowerCase())
  );

  /**
   * Todoの削除ハンドラー
   * @param {string} todoToDelete 削除対象のTodo
   */
  const onClickDelete = (todoToDelete) => {
    const newTodos = incompleteTodo.filter((todo) => todo !== todoToDelete);
    setIncompleteTodo(newTodos);
  }

  return (
    <>  
    <div className="complete-area">
      <h1 className="title">Todo App</h1>
    </div>
    <div className="input-area">
      <AddTodo 
        placeholder={"Enter your task here"}
        todoText={todoText}
        onChangeTodoText={onChangeTodoText}
        onEnterPress={onEnterPress}
      />
    </div>
    <div className="Todo-search">
      <SearchTodo 
        placeholder={"Search Keyword"}
        inputValue={searchKeyword}
        onChangeInputValue={onChangeInputValue}
      />

    </div>
    <div className="incomplete-area">
      <h2 className="title">Todo List</h2>
      <TodoList 
        incompleteTodo={filteredTodos}
        onClickDelete={onClickDelete} 
      />
    </div>
    </>
  )
}