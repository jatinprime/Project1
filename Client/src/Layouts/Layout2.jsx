import React from 'react'
import Header from '../Components/Header/Header'
import { Outlet } from 'react-router-dom'
import Footer from '../Components/Footer/footer'

const Layout2 = () => {
  return (
    <div>
      <Outlet/>
      <Footer/>
    </div>
  )
}

export default Layout2
