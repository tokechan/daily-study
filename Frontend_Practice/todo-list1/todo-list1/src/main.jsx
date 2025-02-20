import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { Todo } from './pages/Todo.jsx'
import { TodoProvider } from './contexts/TodoContext.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    {/* TodoProviderでTodoContextをラップ */}
    {/* TodoProviderの中にTodoコンポーネントを配置 */}
    <TodoProvider>
      <Todo />
    </TodoProvider>
  </StrictMode>,
)
