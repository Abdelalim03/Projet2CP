import React, { useState } from 'react'
import { Outlet } from 'react-router-dom'
import SideBar from './SideBar'

function Layout() {
  const [Fr, setArabe] = useState(true);
  return (
    <div className={`flex bg-symapp-blue-light-second ${!Fr ? 'flex-row-reverse': ""} `}>
        <SideBar Language={Fr} />
        <Outlet />
    </div>
  )
}

export default Layout