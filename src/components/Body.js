
import {createBrowserRouter , RouterProvider} from "react-router-dom"
import Layout from './Layout'
import { lazy } from "react"
import { Suspense } from "react"

const Body = () => {

    const Registration = lazy(()=> import("./Registration"));
    const Login = lazy(()=> import("./Login"));
    
  
    const appRoute = createBrowserRouter([
        {
            path:"/",
            element:<Layout/>,
            children:[
                {
                    path: "/register",
                    element: (
                      <Suspense>
                        <Registration />
                      </Suspense>
                    ),
                },
                {
                    path: "/login",
                    element: (
                      <Suspense>
                        <Login />
                      </Suspense>
                    ),
                },
                
            ]
        }
    ])

    return (
        <div>
          <RouterProvider router={appRoute} />
        </div>
    );
}

export default Body
