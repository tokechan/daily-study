import { Routes, Route } from 'react-router-dom';
import { TodoListPage } from '../pages/TodoListPage';
import { TodoDetailPage } from '../pages/TodoDetailPage';
import { TodoCreatePage } from '../pages/TodoCreatePage';
import { TodoEditPage } from '../pages/TodoEditPage';
import { createBrowserRouter } from "react-router-dom";

export const AppRoutes = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<TodoListPage />} />
        <Route path="/create" element={<TodoCreatePage />} />
        <Route path="/detail/:id" element={<TodoDetailPage />} />
        <Route path="/edit/:id" element={<TodoEditPage />} />
      </Routes>
    </>
  );
};

export const router = createBrowserRouter([
  {
    path: "/",
    element: <TodoListPage />,
  },
  // 他のルートもここに追加可能
]);
