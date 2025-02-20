import { createContext, useContext, useState } from 'react'
// Contextを作成
export const TodoContext = createContext(null);

// Providerコンポーネントを作成
export const TodoProvider = ({ children }) => {
  const [incompleteTodo, setIncompleteTodo] = useState([]);
  const [searchKeyword, setSearchKeyword] = useState("");

  // 検索関連の関数
  const onChangeInputValue = (e) => setSearchKeyword(e.target.value);
  
  // Todo削除の関数
  const onClickDelete = (todoToDelete) => {
    const newTodos = incompleteTodo.filter((todo) => todo !== todoToDelete);
    setIncompleteTodo(newTodos);
  };

  // 検索結果の計算
  const filteredTodos = incompleteTodo.filter((todo) =>
    todo.toLowerCase().includes(searchKeyword.toLowerCase())
  );

  const value = {
    incompleteTodo,
    setIncompleteTodo,  // Todoの追加のために公開
    searchKeyword,
    filteredTodos,
    onChangeInputValue,
    onClickDelete,
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