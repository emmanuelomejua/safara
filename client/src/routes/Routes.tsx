import Navbar from "../components/Navbar";
import { Home, Register, Login, PostList, SinglePost, Write } from "../pages";

import { createBrowserRouter, Outlet, RouterProvider } from "react-router-dom";


function AppLayout(){
  return(
    <div  className="px-4 md:px-8 lg:px-16 xl:px-32 2xl:px-64">
      <Navbar/>
      <Outlet/>
    </div>
  )
}


const router = createBrowserRouter([
  {
    path: '/',
    element: <AppLayout/>,
    children: [
      {
      path: '/',
      element: <Home/>
      },
      {
      path: '/posts',
      element: <PostList/>
      },
      {
        path: '/posts/:slug',
        element: <SinglePost/>
      },
      {
        path: '/write',
        element: <Write/>
      },
    ]
  },
  {
    path: '/sign-in',
    element: <Login/>
  },
  {
    path: '/sign-up',
    element: <Register/>
  },
])

const Routes = () => {
  return (
    <RouterProvider router={router} />
  )
}

export default Routes;

