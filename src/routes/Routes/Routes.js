import { createBrowserRouter } from "react-router-dom";
import Login from "../../authentications/Login/Login";
import Register from "../../authentications/Register/Register";
import Main from "../../Main/Main";
import Home from "../../pages/Home/Home";

export const routes = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        children: [
            {
                path: '/',
                element: <Home></Home>
            },
            {
                path: '/home',
                element: <Home></Home>
            },
            {
                path: '/login',
                element: <Login></Login>
            },
            {
                path: '/register',
                element: <Register></Register>
            }
        ]
    }
])