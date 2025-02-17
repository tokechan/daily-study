import "../index.css"
import { AddTodo } from "../components/AddTodo";
import { TodoList } from "../components/TodoList";
import { SearchTodo } from "../components/SearchTodo";
import { useTodo } from "../Hooks/useTodo";

/**
 * カスタムフックを使用したTodoアプリケーションのメインコンポーネント
 * Todoの追加、検索、削除機能を提供する
 * @returns {JSX.Element} Todoアプリケーションの画面
 */
export const Todo = () => {
  const {
    todoText,
    searchKeyword,
    filteredTodos,
    onChangeTodoText,
    onEnterPress,
    onChangeInputValue,
    onClickDelete,
  } = useTodo();

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