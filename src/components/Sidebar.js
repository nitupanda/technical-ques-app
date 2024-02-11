import React from 'react'
import SidebarOptions from './SidebarOptions';

const Sidebar = ({ onTypeSelect }) => {
  return (
    <div className='sidebar'>
      <SidebarOptions onTypeSelect={onTypeSelect}/>
    </div>
  )
}

export default Sidebar
