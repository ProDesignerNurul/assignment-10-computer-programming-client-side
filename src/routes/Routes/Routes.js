import { createBrowserRouter } from "react-router-dom";
import Login from "../../authentications/Login/Login";
import Register from "../../authentications/Register/Register";
import Main from "../../Main/Main";
import Categories from "../../pages/Categories/Categories";
import DisplayDetails from "../../pages/DisplayDetails/DisplayDetails";
import Home from "../../pages/Home/Home";
import MainHome from "../../pages/MainHome/MainHome";
import Programming from "../../pages/Programming/Programming";

export const routes = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        children: [
            {
                path: '/',
                element: <MainHome></MainHome>
            },
            {
                path: '/home',
                element: <MainHome></MainHome>
            },
            {
                path: '/courses',
                element: <Home></Home>,
                loader: () => fetch('http://localhost:5000/main')
            },
            {
                path: '/courses',
                element: <Home></Home>,
                loader: () => fetch('http://localhost:5000/main')
            },
            {
                path: '/categories/:id',
                element: <Categories></Categories>,
                loader: ({params}) => fetch(`http://localhost:5000/category/${params.id}`)
            },
            {
                path: '/programming/:id',
                element: <Programming></Programming>,
                loader: ({params}) => fetch(`http://localhost:5000/category/${params.id}`)
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