import React from 'react'
import ReactDOM from 'react-dom/client'
import {createBrowserRouter , RouterProvider} from 'react-router-dom'
import App from './pages/App.jsx'
import NotFoundPage from './pages/Error404Page.jsx'
import Card from './pages/CardPage.jsx'
import './index.css'
import Button from './pages/Button.jsx'
import Student from './pages/StudentPage.jsx'
import UserGreeting from './pages/UserGreeting.jsx'
import ListFunctions from './pages/ListFunctions.jsx'
import List from './pages/ListPage.jsx'

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <NotFoundPage />
  },
  {
    path: "/card",
    element: <Card />
  },
  {
    path: "/button",
    element: <Button />
  },
  {
    path: "/student",
    element: <Student />
  },
  {
    path: "/userGreeting",
    element: <UserGreeting isLoggedIn={true}  username="Kavin" />
  },
  {
    path: "/listFunctions",
    element: <ListFunctions />
  },
  {
    path: "/listAsProps",
    element: <List />
  }

]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider  router={router}/>
  </React.StrictMode>,
);
