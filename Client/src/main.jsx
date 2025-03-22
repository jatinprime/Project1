import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { Route, createBrowserRouter, createRoutesFromElements } from 'react-router-dom'
import Layout from './Layouts/Layout'
import { RouterProvider } from 'react-router'
import About from './Pages/About'
import Login from './Pages/Login.jsx'
import Layout2 from './Layouts/Layout2'
import Signup from './Pages/Signup.jsx'
import Home from './Pages/Home.jsx'
import Notfound from './Pages/Notfound.jsx'
import PrivacyPolicy from './Pages/PrivacyPolicy.jsx'
import Contact from './Pages/contact.jsx'
import MovieDetails from './Pages/MovieDetails'
import CategoryMoviePage from './Pages/CategoryMoviePage.jsx'
import SubscriptionPage from './Pages/SubscriptionPage.jsx'


const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path = "" element = {<Layout/>}>
      <Route path = "/login" element = {<Login/>} />
      <Route path = "/" element = {<Home/>}/>
      <Route path = "/about" element = {<About/>} />
      <Route path = "/register" element = {<Signup/>} />
      <Route path = "/contact" element = {<Contact/>}/>
      <Route path = "/privacy-policy" element = {<PrivacyPolicy/>} />
      <Route path="/movie/:id" element={<MovieDetails />} /> {/* Dynamic route */}
      <Route path="/category/:genre" element={<CategoryMoviePage/>} />
      <Route path = "/subscription" element= {<SubscriptionPage/>} />
      {/* <Route path='/movie' element = {<MovieDetails/>} /> */}
        <Route path = "*" element = {<Notfound/>} />
      
      </Route>
  )
)

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router}/>
</StrictMode>
)
