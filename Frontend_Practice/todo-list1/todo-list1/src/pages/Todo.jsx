import { useState } from "react"
import "../index.css"
import { AddTodo } from "../components/AddTodo";
import { TodoList } from "../components/TodoList";

/**
 * Todoコンポーネント
 * 
 * Todoリストの入力フォームと未完了のTodoリストを表示する
 */
export const Todo = () => {

  /**
   * 入力フォームの値を保持するステート
   */
  const [todoText, setTodoText] = useState("");

  /**
   * 未完了のTodoリストを保持するステート
   */
  const [incompleteTodo, setIncompleteTodo] = useState([]);

  /**
   * 入力フォームの値が変更されたときに呼ばれるハンドラー
   * @param {ChangeEvent} e 
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
        placeholder=""
        todoText={todoText}
        onChangeTodoText={onChangeTodoText}
        onEnterPress={onEnterPress}
      />
    </div>
    <div className="incomplete-area">
      <h2 className="title">Todo List</h2>
      <TodoList 
        incompleteTodo={incompleteTodo}
        onClickDelete={onClickDelete} 
      />
    </div>
    </>
  )
}