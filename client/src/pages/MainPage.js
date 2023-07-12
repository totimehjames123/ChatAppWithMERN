import React from 'react'
import Sidebar from '../components/Sidebar'
import ChatPage from './ChatPage'
import ChatPageNavBar from '../components/ChatPageNavBar'

function MainPage() {
  return (
    <div>
      {/* <ChatPageNavBar /> */}
      <Sidebar />
      <ChatPage />
    </div>
  )
}

export default MainPage
