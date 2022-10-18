import React from 'react'
import {
  createBrowserRouter, RouterProvider
} from 'react-router-dom'

import Root from './routes/root'
import ErrorPage from './pages/error-page'
import { Catalog } from './routes/catalog'
import './styles.css'

const router = createBrowserRouter([
  {
    path: '/',
    element: <Root />,
    errorElement: <ErrorPage/>,
    children: [
      {
        path: 'catalog',
        element: <Catalog/>
      }
    ]
  }
])

export default function App () {
  return (
    <div className="App">
      <RouterProvider router={router} />
    </div>
  )
}
