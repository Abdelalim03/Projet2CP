import React from 'react'
import { Outlet } from 'react-router-dom'
import SideBar from './SideBar'

function Layout() {
  return (
    <div className='flex bg-symapp-blue-light-second'>
        <SideBar />
        <Outlet />
    </div>
  )
}

export default Layout