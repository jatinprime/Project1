import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { Route, createBrowserRouter, createRoutesFromElements } from 'react-router-dom'
import Layout from './Layout'
import { RouterProvider } from 'react-router'
import About from './Pages/About'
import Signup from './Pages/Signup.jsx'
import Home from './Pages/Home.jsx'
import Notfound from './Pages/Notfound.jsx'
import PrivacyPolicy from './Pages/PrivacyPolicy.jsx'
import Contact from './Pages/contact.jsx'

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path = "" element = {<Layout/>}>
      <Route path = "/" element = {<Home/>}/>
      <Route path = "/about" element = {<About/>} />
      <Route path = "/register" element = {<Signup/>} />
      <Route path = "/contact" element = {<Contact/>}/>
      <Route path = "/privacy-policy" element = {<PrivacyPolicy/>} />

      <Route path = "*" element = {<Notfound/>} />
      
    </Route>
  )
)

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router}/>
    {/* <h1>Changes 1</h1>
    <h1>changes 2</h1> */}
  </StrictMode>,
)
