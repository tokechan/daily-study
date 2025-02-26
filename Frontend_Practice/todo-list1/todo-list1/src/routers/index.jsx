import { Routes, Route } from 'react-router-dom';
// import { TodoListPage } from '../components/pages/TodoListPage';
// import { TodoDetailPage } from '../components/pages/TodoDetailPage';
// import { TodoCreatePage } from '../components/pages/TodoCreatePage';
// import { TodoEditPage } from '.../components/pages/TodoEditPage';
import { 
  TodoCreatePage,
  TodoDetailPage,
  TodoEditPage,
  TodoListPage,
} from "../pages";

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

