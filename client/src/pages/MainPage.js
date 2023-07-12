import React from 'react'
import Sidebar from '../components/Sidebar'
import ChatPage from './ChatPage'
import ChatPageNavBar from '../components/ChatPageNavBar'
import { useLocation } from 'react-router-dom'

function MainPage() {
  const location = useLocation()
  const {id} = location.state

  return (
    <div>
    <div>{id}</div>
      {/* <ChatPageNavBar /> */}
      <Sidebar />
      <ChatPage />
    </div>
  )
}

export default MainPage
