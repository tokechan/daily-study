import { createContext, useContext, useState } from 'react'
// Contextを作成
export const TodoContext = createContext(null);

// Providerコンポーネントを作成
export const TodoProvider = ({ children }) => {
  const [todoText, setTodoText] = useState("");
  const [incompleteTodo, setIncompleteTodo] = useState([]);
  const [searchKeyword, setSearchKeyword] = useState("");

  //Todo操作の関数
  const onChangeTodoText = (e) => setTodoText(e.target.value)

  const onEnterPress = (e) => {
    if (e.key === 'Enter' && todoText.trim() !== '') {
      setIncompleteTodo((prev) => [...prev, todoText])
      setTodoText("")
    }
  }
  
  const onClickDelete = (todoToDelete) => {
    const newTodos = incompleteTodo.filter((todo) => todo !== todoToDelete)
    setIncompleteTodo(newTodos)
  }

  // 検索関連の関数を追加
  const onChangeInputValue = (e) => setSearchKeyword(e.target.value);
  
  // 検索結果の計算
  const filteredTodos = incompleteTodo.filter((todo) =>
    todo.toLowerCase().includes(searchKeyword.toLowerCase())
  );

  const value = {
    todoText,
    incompleteTodo,
    searchKeyword,
    filteredTodos,
    onChangeTodoText,
    onEnterPress,
    onClickDelete,
    onChangeInputValue,
  }

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