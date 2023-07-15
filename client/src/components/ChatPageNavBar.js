import React from 'react'
import { NavLink } from 'react-router-dom'

function ChatPageNavBar({id}) {
  return (
    <div className='bg-gray-50' style={{width: '100%', height: '10vh'}}>
      Nav Bar
      <span>{id}</span>
      <NavLink to="/mainpage">Chat</NavLink>
      <NavLink to="/about">About</NavLink>
      <NavLink to="/contact">contact</NavLink>
    </div>
  )
}

export default ChatPageNavBar
