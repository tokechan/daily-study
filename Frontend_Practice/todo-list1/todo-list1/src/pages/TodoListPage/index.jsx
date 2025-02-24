import "../../index.css"
import { AddTodo } from "../../components/AddTodo";
import { TodoList } from "../../components/TodoList";
import { SearchTodo } from "../../components/SearchTodo";
import { useTodo } from "../../Hooks/useTodo";

/**
 * Todo一覧ページのコンポーネント
 * Todoの一覧表示、追加、検索、削除機能を提供する
 * @returns {JSX.Element} Todo一覧ページの画面
 */
export const TodoListPage = () => {
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
      <h1>TODO一覧</h1>
      {/** 既存のコンポーネントをここに移植 */}
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
  );
};