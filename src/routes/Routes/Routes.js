import { createBrowserRouter } from "react-router-dom";
import Login from "../../authentications/Login/Login";
import Register from "../../authentications/Register/Register";
import Main from "../../Main/Main";
import About from "../../pages/About/About";
import Blogs from "../../pages/Blogs/Blogs";
import Categories from "../../pages/Categories/Categories";
import FAQ from "../../pages/FAQ/FAQ";
import Home from "../../pages/Home/Home";
import MainHome from "../../pages/MainHome/MainHome";
import PremiumCourse from "../../pages/PremiumCourse/PremiumCourse";
import Programming from "../../pages/Programming/Programming";
import PrivateRoute from "../PrivateRoute/PrivateRoute";

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
                loader: () => fetch('https://computer-programming-server.vercel.app/main')
            },
            {
                path: '/courses',
                element: <Home></Home>,
                loader: () => fetch('https://computer-programming-server.vercel.app/main')
            },
            {
                path: '/categories/:id',
                element: <Categories></Categories>,
                loader: ({params}) => fetch(`https://computer-programming-server.vercel.app/category/${params.id}`)
            },
            {
                path: '/premium',
                element: <PrivateRoute><PremiumCourse></PremiumCourse></PrivateRoute>
            },
            {
                path: '/programming/:id',
                element: <Programming></Programming>,
                loader: ({params}) => fetch(`https://computer-programming-server.vercel.app/category/${params.id}`)
            },
            {
                path: '/faq',
                element: <FAQ></FAQ>
            },
            {
                path: '/blogs',
                element: <Blogs></Blogs>
            },
            {
                path: '/about',
                element: <About></About>
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
        
    },
    {
        path: '*',
        element: <div className="fs-2 text-center"> Wrong URL, Please Provide A valid URL!!! Thank You!!!</div>
    }
    
])