import React from 'react'
import Login from './Login'
import Layout from './Layout'
import Register from './Register'
import Home from './Home'
import Userdetails from './Userdetails'
import Graph from './Graph'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'

let r = createBrowserRouter([
    {
        path : "/",
        element : <Layout/>,
        children : [
            {
                index : true,
                element : <Login/>
            },
            {
                path : "/home",
                element : <Home/>
            },
            {
                path : "/register",
                element : <Register/>
            },
            {
                path : "/userdetails",
                element : <Userdetails/>
            },
            {
                path : "/userdetails/:id",
                element : <Userdetails/>
            },
            {
                path : "/graph",
                element : <Graph/>
            }
        ]
    }
])
const Routing = () => {
  return (
    <RouterProvider router={r}></RouterProvider>
  )
}

export default Routing
