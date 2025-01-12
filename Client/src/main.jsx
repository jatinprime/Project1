import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { Route, createBrowserRouter, createRoutesFromElements } from 'react-router-dom'
import Layout from './Layout'
import { RouterProvider } from 'react-router'
import About from './Pages/About'
import Login from './Pages/Login'
import Hello from './Pages/hello'
import Home from './Pages/Home'
import Notfound from './Pages/Notfound'

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path = "/" element = {<Layout/>}>
      <Route path = "" element = {<Home/>} />
      <Route path = "about" element = {<About/>} />
      <Route path="about/hello" element = {<Hello/>} />
      <Route path = "login" element = {<Login/>} />
      <Route path = "*" element = {<Notfound/>} />
      
    </Route>
  )
)

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router}/>
  </StrictMode>,
)
