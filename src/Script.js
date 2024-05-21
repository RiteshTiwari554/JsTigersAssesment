import React from 'react'
import { Outlet } from 'react-router-dom'
import LeftPanel from './components/LeftPanel';
import Navbar from './components/Navbar';

const Script = () => {
  return (
    <div className='script'>
         <Navbar/>
        <LeftPanel/>
        <Outlet/>
    </div>
  )
}

export default Script;