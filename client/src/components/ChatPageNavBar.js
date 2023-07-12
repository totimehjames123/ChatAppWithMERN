import React from 'react'
import { NavLink } from 'react-router-dom'

function ChatPageNavBar() {
  return (
    <div style={{width: '100%', backgroundColor: 'yellow', border: 'thin solid purple', height: '10vh'}}>
      Nav Bar

      <NavLink to="/mainpage">Chat</NavLink>
      <NavLink to="/about">About</NavLink>
      <NavLink to="/contact">contact</NavLink>
    </div>
  )
}

export default ChatPageNavBar
