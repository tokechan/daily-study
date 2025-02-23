import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { Todo } from './pages/Todo.jsx'
import { TodoProvider } from './contexts/TodoContext.jsx'
import { BrowserRouter } from 'react-router-dom'
import { AppRoutes } from './routers/index.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    {/* TodoProviderでTodoContextをラップ */}
    {/* TodoProviderの中にTodoコンポーネントを配置 */}
    <TodoProvider>
      <BrowserRouter>
      <AppRoutes />
      {/* <Todo /> */}
      </BrowserRouter>
    </TodoProvider>
  </StrictMode>,
)
