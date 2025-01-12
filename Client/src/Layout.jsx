import React from 'react'
import Header from './Components/Header/Header'
import { Outlet, useLocation } from 'react-router-dom'
import Footer from './Components/Footer/footer'


const Layout = () => {
  const location = useLocation() ;
  const headerHide = (location.pathname === '/register' || location.pathname === '/login') ;
  return (
    <div>
      {!headerHide && <Header/>}
      <Outlet/>
      <Footer/>
    </div>
  )
}

export default Layout
