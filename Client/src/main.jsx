import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { Route, createBrowserRouter, createRoutesFromElements } from 'react-router-dom'
import Layout from './Layout'
import About from './Components/AboutPage/About'
import { RouterProvider } from 'react-router'

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path = "/" element = {<Layout/>}>
      {/* <Route path = "" element = {} /> */}
      <Route path = "about" element = {<About/>} />
    </Route>
  )
)

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router}/>
    <App/>
  </StrictMode>,
)
