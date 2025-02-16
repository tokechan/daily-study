import { useState } from "react"
import "./index.css"

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

  return (
    <>  
    <div className="complete-area">
      <h1 className="title">Todo App</h1>
    </div>
    <div className="input-area">
      {/* <h2 className="title">Add Todo</h2> */}
      <input placeholder="Enter your task here" value={todoText} onChange={onChangeTodoText} onKeyDown={onEnterPress} />
    </div>
    <div className="incomplete-area">
      <h2 className="title">Todo List</h2>
      {incompleteTodo.map((todo) => (
        <p className="todo-item" key={todo}>{todo}</p>
      ))}
    </div>
    </>
  )
}