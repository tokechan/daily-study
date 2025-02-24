import { RouterProvider } from "react-router-dom";
import { router } from "./routers";
import { BrowserRouter } from "react-router-dom";
import { TodoProvider } from "./contexts/TodoContext";
import { AppRoutes } from "./routers";

export const App = () => {
    return (
        <TodoProvider>
            <BrowserRouter>
                <AppRoutes />
            </BrowserRouter>
        </TodoProvider>
    );
};

export default App;