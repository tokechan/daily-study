import { Routes, Route } from 'react-router-dom';
import { TodoListPage } from '../pages/TodoListPage';
import { TodoDetailPage } from '../pages/TodoDetailPage';
import { TodoCreatePage } from '../pages/TodoCreatePage';
import { TodoEditPage } from '../pages/TodoEditPage';

import { Header } from '../components/Header';
import { NAVIGATION_LIST } from '../constants/navigation';

export const Router = () => {
  return (
    <>
        <Header />
        <Routes>
        <Route path={NAVIGATION_LIST.TOP} element={<TodoListPage />} />
        <Route path={NAVIGATION_LIST.CREATE} element={<TodoCreatePage />} />
        <Route path={NAVIGATION_LIST.DETAIL} element={<TodoDetailPage />} />
        <Route path={NAVIGATION_LIST.EDIT} element={<TodoEditPage />} />
        </Routes>
    </>
  );
};

