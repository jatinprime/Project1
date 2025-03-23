import React from 'react'
import Header from '../Components/Header/Header'
import { Outlet, useLocation } from 'react-router-dom'
import Footer from '../Components/Footer/footer'
import UserContextProvider from '../Context/Store'
import { Toaster } from 'react-hot-toast'


const Layout = () => {
  const location = useLocation() ;
  const hideHeader = (location.pathname === '/register' || location.pathname === '/login') ;
  return (
    <UserContextProvider >
      <div>
        <Toaster position="top-right" />
        {!hideHeader && <Header/>}
        <Outlet/>
        <Footer/>
      </div>
    </UserContextProvider>
    
  )
}

export default Layout
