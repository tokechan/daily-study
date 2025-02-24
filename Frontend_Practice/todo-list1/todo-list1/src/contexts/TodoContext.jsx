import { createContext, useContext, useState, useCallback } from 'react'
// Contextを作成
export const TodoContext = createContext({});


// Providerコンポーネントを作成
export const TodoProvider = ({ children }) => {
  const [todos, setTodos] = useState([]);
  const [searchKeyword, setSearchKeyword] = useState("");

  // 検索関連の関数
  const onChangeInputValue = useCallback((e) => {
    setSearchKeyword(e.target.value);
  }, []);
  
  // Todo削除の関数
  const onClickDelete = useCallback((todoToDelete) => {
    setTodos(prevTodos => 
      prevTodos.filter(todo => todo.id !== todoToDelete.id)
    );
  }, []);

  // 検索結果の計算
  const filteredTodos = todos.filter((todo) =>
    todo.title.toLowerCase().includes(searchKeyword.toLowerCase())
  );

  // Todoの作成
  const createTodo = useCallback(({ title, content }) => {
    const newTodo = {
      id: Date.now(),
      title,
      content,
      createdAt: new Date().toISOString(),
    };
    setTodos(prevTodos => [...prevTodos, newTodo]);
  }, []);

  // Todo詳細取得の関数
  const getTodoById = useCallback((id) => {
    return todos.find(todo => todo.id === Number(id));
  }, [todos]);

  // Todo編集の関数
  const updateTodo = useCallback((id, updatedData) => {
    setTodos(prevTodos => 
      prevTodos.map(todo => 
        todo.id === Number(id) 
          ? { ...todo, ...updatedData, updatedAt: new Date().toISOString() }
          : todo
      )
    );
  }, []);

  const value = {
    todos,
    setTodos,
    searchKeyword,
    filteredTodos,
    onChangeInputValue,
    onClickDelete,
    createTodo,
    getTodoById,
    updateTodo,
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