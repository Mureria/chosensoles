import React from 'react'
import { Outlet } from 'react-router-dom'
import Header from './Header'
import Footer from './Footer'

const Layout = () => {
  return (
      <>
        <Header/>
        <Outlet className='max-w-[1200px} my-4 mx-auto rounded-md'/>
        <Footer/>
      </>
    )
}

export default Layout