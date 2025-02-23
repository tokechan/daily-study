import { Routes, Route } from 'react-router-dom';
import { TodoListPage } from '../pages/TodoListPage';
import { TodoDetailPage } from '../pages/TodoDetailPage';
import { TodoCreatePage } from '../pages/TodoCreatePage';
import { TodoEditPage } from '../pages/TodoEditPage';

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
