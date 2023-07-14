import React, {useState, useCallback, useEffect} from 'react'
import './../index.css'
import ChatMessage from '../components/ChatMessage';
import InputField from '../components/InputField';

function ChatPage() {
  const [messages, setMessages] = useState([])

  const senderEmail = sessionStorage.getItem('senderEmail')
  const recipientEmail = sessionStorage.getItem('recipientEmail')
  
  const longPollingRequest = useCallback(() => {
      fetch("http://localhost:5000/selectmessages")
        .then((response) => response.json())
        .then((data) => {
          if (data.data) {
            setMessages(data.data);
          }
          longPollingRequest(); 
        })
        .catch((error) => {
          // console.error('Error in long polling request:', error);
          longPollingRequest(); 
        });
    }, []);
  
    useEffect(() => {
      longPollingRequest(); 
    }, [longPollingRequest]);
    
  // const message = [
  //   { id: 1, profilePicture: 'logo.jpeg', name: 'Sender Name', time: '10:30 AM', message: 'Hello, will you be going to school today!', isSender: isSender },
  //   { id: 2, profilePicture: 'logo.png', name: 'Recipient Name', time: '10:32 AM', message: 'Hi, yes i will be going ... I\'ll be coming along with my laptop!', isSender: isSender },
  //   // Add more messages as needed
  // ];

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
                  isSender={true}
                /> 
               
            ))}
        </div>
      </div>
      <div className='p-5'>
        <InputField />
      </div>
    </div>
    </>
    
  )
}

export default ChatPage
