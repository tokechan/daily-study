import { useTodo } from '../../Hooks/useTodo';
import { SearchTodo } from '../../components/SearchTodo';
import { TodoList } from '../../components/TodoList';
import '../../index.css';

export const TodoListPage = () => {
  const {
    searchKeyword,
    filteredTodos,
    onChangeInputValue,
    onClickDelete,
  } = useTodo();

  return (
    <>
      <div className="complete-area">
        <h1 className="title">Todo App</h1>
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
          todos={filteredTodos}
          onClickDelete={onClickDelete} 
        />
      </div>
    </>
  );
};