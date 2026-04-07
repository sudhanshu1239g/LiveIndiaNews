import { RouterProvider } from "react-router";
import {router} from './app.routes.jsx'
import React from 'react'


function App() {

  return (
    <>
    <RouterProvider router={router}></RouterProvider>
    </>
  )
}

export default App
