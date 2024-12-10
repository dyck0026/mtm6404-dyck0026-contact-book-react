import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Home from './routes/Home'
import Contact from './routes/Contact'
import Edit from './routes/Edit'
import Add from './routes/Add'

const router = createBrowserRouter([
  {
  path: '/',
  element: <App />,
  children: [
  { path: '/', element: <Home /> },
  { path: '/contact', element: <Contact /> },
  { path: '/edit', element: <Edit /> },
  { path: '/add', element: <Add /> }
  ]
  }
  ])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
)
