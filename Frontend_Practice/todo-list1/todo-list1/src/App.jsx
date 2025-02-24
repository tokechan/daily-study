import { BrowserRouter } from 'react-router-dom';
import { TodoProvider } from './contexts/TodoContext';
import { Router } from './routers';

export const App = () => {
    return (
        <TodoProvider>
            <BrowserRouter>
                <Router />
            </BrowserRouter>
        </TodoProvider>
    );
};

export default App;