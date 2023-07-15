import React, {useState, useCallback, useEffect} from 'react'
import './../index.css'
import ChatMessage from '../components/ChatMessage';
import InputField from '../components/InputField';

function ChatPage({users, messages, senderId, recipientId, recipientProfilePicture, recipientUsername}) {

  return (
    <>
    <div className='main-content bg-gray-100 h-screen p-5' >
      <div className=''>
          <div className='rounded-lg bg-white pl-4 chat-container'>
            {messages.map((msg) => (
                <ChatMessage
                  key={msg._id}
                  username = {msg.username}
                  email ={msg.senderEmail}
                  profilePicture={senderId === msg.senderEmail ? msg.senderProfilePicture : msg.recipientProfilePicture}
                  time={msg.chatDate}
                  message={msg.message}
                  isSender={senderId === msg.senderEmail ? true : false}
                /> 
               
            ))}
        </div>
      </div>
      <div className='p-5'>
        <InputField senderId={senderId} recipientId={recipientId} recipientProfilePicture={recipientProfilePicture} recipientUsername={recipientUsername}/>
      </div>
    </div>
    </>
    
  )
}

export default ChatPage
