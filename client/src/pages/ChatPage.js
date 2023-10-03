import React, {useState, useCallback, useEffect} from 'react'
import './../index.css';
import ChatMessage from '../components/ChatMessage';
import InputField from '../components/InputField';
import { formatDistanceToNow, parseISO } from 'date-fns';

function ChatPage({messages, senderId, recipientId, recipientProfilePicture, recipientUsername}) {
  const formatDate = (date) => {
    return formatDistanceToNow(parseISO(date), { addSuffix: true });
  };

  return (
    <>
    <div className='main-content bg-gray-50 h-screen pl-0 p-5  '>
      <div className=' overflow-hidden justify-between'>
          <div className='rounded-lg bg-white pl-4 chat-container overflow-scroll'>
            {messages.map((msg) => (
              recipientId == "" || recipientId == null ? 
              "":
              <ChatMessage
                key={msg._id}
                username = {msg.senderUsername}
                email ={msg.senderEmail }
                profilePicture={msg.senderProfilePicture}
                time={formatDate(msg.chatDate)}
                message={msg.message}
                isSender={senderId === msg.senderEmail ? true : false}
              /> 
            ))}
            {recipientId == "" || recipientId == null ? 
            <div className='text-center pt-24 text-[22px]'>
              <b>👈👈👈👈👈</b><br />
              Click on any user from the side bar and start chatting
            </div>
             : ""}
        </div>
      </div>
      <div className='p-5'>
        {recipientId == "" || recipientId == null ? 
        <div className='w-100 bg-white text-center rounded-[20px] p-4'>
          <b>NO USER SELECTED</b>
        </div>
        :
          <InputField senderId={senderId} recipientId={recipientId} recipientProfilePicture={recipientProfilePicture} recipientUsername={recipientUsername}/>
        }
      </div>
    </div>
    </>
    
  )
}

export default ChatPage
