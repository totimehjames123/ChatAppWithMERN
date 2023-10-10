import React from 'react'
// import { NavLink } from 'react-router-dom'

function ChatPageNavBar({id}) {
  return (
    <div className='bg-gray-50 flex items-center' style={{width: '100%', height: '10vh'}}>
      <div className='rounded m-3 bg-white' style={{width: '98%', height: '90%', marginTop: '20px', borderRadius: '20px', paddingLeft: '20px'}}>
        <img src='logo.jpeg' width={50} height={50} alt='logo'/>
      </div>
    </div>
  )
}

export default ChatPageNavBar
