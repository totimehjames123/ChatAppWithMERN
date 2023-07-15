import React, {useState, useCallback, useEffect} from 'react'
import './../index.css'
import ChatMessage from '../components/ChatMessage';
import InputField from '../components/InputField';

function ChatPage({users, messages, senderId, recipientId}) {

  return (
    <>
    <div className='main-content bg-gray-100 h-screen p-5' >
      <div className=''>
          <div className='rounded-lg bg-white pl-4 chat-container'>
            {messages.map((msg) => (
                <ChatMessage
                  key={msg.id}
                  username = {msg.username}
                  email ={msg.email}
                  profilePicture={msg.profilePicture}
                  time={msg.time}
                  message={msg.message}
                  isSender={senderId === msg.senderEmail ? true : false}
                /> 
               
            ))}
        </div>
      </div>
      <div className='p-5'>
        <InputField senderId={senderId} recipientId={recipientId}/>
      </div>
    </div>
    </>
    
  )
}

export default ChatPage
