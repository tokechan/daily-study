import { createContext, useContext, useState } from 'react'
// Contextを作成
export const TodoContext = createContext({});

// Providerコンポーネントを作成
export const TodoProvider = ({ children }) => {
  const [todos, setTodos] = useState([]);
  const [searchKeyword, setSearchKeyword] = useState("");

  // 検索関連の関数
  const onChangeInputValue = (e) => setSearchKeyword(e.target.value);
  
  // Todo削除の関数
  const onClickDelete = (todoToDelete) => {
    const newTodos = todos.filter((todo) => todo.id !== todoToDelete.id);
    setTodos(newTodos);
  };

  // 検索結果の計算
  const filteredTodos = todos.filter((todo) =>
    todo.title.toLowerCase().includes(searchKeyword.toLowerCase())
  );
  // Todoの作成
  const createTodo = ({ title, content }) => {
    const newTodo = {
      id: Date.now(),
      title,
      content,
      createdAt: new Date().toISOString(),
    };
    setTodos(prevTodos => [...prevTodos, newTodo]);
  };

  const value = {
    todos,
    setTodos,
    searchKeyword,
    filteredTodos,
    onChangeInputValue,
    onClickDelete,
    createTodo,
  };

  return (
    <TodoContext.Provider value={value}>
      {children}
    </TodoContext.Provider>
  );
};

// Consumerコンポーネントを作成
// Custom Hookを作成  
export const useTodoContext = () => {
  const context = useContext(TodoContext);
  if (!context) {
    throw new Error('useTodoContext must be used within a TodoProvider')
  }
  return context;
};