import React from 'react'
import Header from './Header'
import { Outlet } from 'react-router-dom'

function Layout({ children }) {
  return (
    <div>
      <Header />
      <Outlet />
    </div>
  )
}

export default Layout