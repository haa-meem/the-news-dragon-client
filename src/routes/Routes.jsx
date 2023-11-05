import { Navigate, createBrowserRouter } from "react-router-dom";
import Main from "../layouts/Main";
import Category from "../pages/Home/Category/Category";
import NewsLayout from "../layouts/NewsLayout";
import News from "../pages/News/News/News";
import LoginLayout from "../layouts/LoginLayout";
import Login from "../pages/Login/Login/Login";
import Register from "../pages/Login/Register/Register";
import PrivateRoute from "./PrivateRoute";
import Terms from "../pages/Shared/Terms/Terms";
import Publish from "../pages/Publish/Publish";
import Published from "../pages/Publish/Published";

const router=createBrowserRouter([
    {
        path:'/',
        element:<LoginLayout></LoginLayout>,
        children:[
            {
                path:'/',
                element:<Navigate to="/category/0"></Navigate>
            },
            {
                path:'login',
                element:<Login></Login>
            },
            {
                path:'register',
                element:<Register></Register>
            },
            {
                path:'terms',
                element:<Terms></Terms>
            },
            {
                path: 'publish',
                element: <PrivateRoute><Publish></Publish></PrivateRoute>
            },
            // {
            //     path:'published',
            //     element:<NewsLayout></NewsLayout>,
            //     children:[
            //         {
            //             path:':id',
            //             element:<PrivateRoute><Published></Published></PrivateRoute>,
            //             loader:()=>fetch('https://the-news-dragon-server-haa-meem.vercel.app/publish')
            //         }
            //     ]
            // },
            {
                path: 'published',
                element: <Published></Published>,
                loader:()=>fetch('https://the-news-dragon-server-haa-meem.vercel.app/publish')
            },
        ]
    },
    {
        path:'category',
        element:<Main></Main>,
        children:[
            {
                path:':id',
                element:<Category></Category>,
                loader:({params})=>fetch(`https://the-news-dragon-server-haa-meem.vercel.app/categories/${params.id}`)
            }
        ]
    },
    {
        path:'news',
        element:<NewsLayout></NewsLayout>,
        children:[
            {
                path:':id',
                element:<PrivateRoute><News></News></PrivateRoute>,
                loader:({params})=>fetch(`https://the-news-dragon-server-haa-meem.vercel.app/news/${params.id}`)
            }
        ]
    }
])

export default router;