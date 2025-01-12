import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { Route, createBrowserRouter, createRoutesFromElements } from 'react-router-dom'
import Layout from './Layout'
import { RouterProvider } from 'react-router'
import About from './Pages/About'
import Login from './Pages/Login.jsx'
import Signup from './Pages/Signup.jsx'
import Home from './Pages/Home.jsx'
import Notfound from './Pages/Notfound.jsx'
import PrivacyPolicy from './Pages/PrivacyPolicy.jsx'

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path = "" element = {<Layout/>}>
      <Route path = "/" element = {<Home/>}/>
      <Route path = "/login" element = {<Login/>} />
      <Route path = "/about" element = {<About/>} />
      <Route path = "/signup" element = {<Signup/>} />
      <Route path = "/privacy-policy" element = {<PrivacyPolicy/>} />
      {/* <Route path = "/about" element = {<About/>} /> */}
      <Route path = "*" element = {<Notfound/>} />
      
    </Route>
  )
)

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router}/>
    {/* <App/> */}
  </StrictMode>,
)
