import React from 'react'
import ReactDOM from 'react-dom/client'
import {createBrowserRouter , RouterProvider} from 'react-router-dom'
import App from './pages/App.jsx'
import NotFoundPage from './pages/Error404Page.jsx'
import Card from './pages/Card.jsx'
import './index.css'

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <NotFoundPage />
  },
  {
    path: "/card",
    element: <Card />
  }
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider  router={router}/>
  </React.StrictMode>,
);
