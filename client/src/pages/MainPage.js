import React, {useEffect, useState, useCallback} from 'react'
import Sidebar from '../components/Sidebar'
import ChatPage from './ChatPage'
import ChatPageNavBar from '../components/ChatPageNavBar'
import axios from 'axios'
import { useLocation } from 'react-router-dom'

function MainPage() {
  const location = useLocation()

  const [users, setUsers] = useState([])
  const [selectedEmail, setSelectedEmail] = useState('')
  const [messages, setMessages] = useState([])
  const [recipientProfilePicture, setRecipientProfilePicture] = useState('')
  const [username, setUsername] = useState('')

  //Update email selections
  const handleEmailUpdate = (emailData) => {
    setSelectedEmail(emailData)
  }

  const handleUsernameUpdate = (usernameData) => {
    setUsername(usernameData)
  }

  const handleRecipientProfilePictureUpdate = ( recipientProfilePictureData) => {
    setRecipientProfilePicture(recipientProfilePictureData)
  }
    
    const longPollingRequest = useCallback(() => {
      fetch("http://localhost:5000/users")
        .then((response) => response.json())
        .then((data) => {
          if (data.data) {
            setUsers(data.data);
          }
          longPollingRequest(); 
        })
        .catch((error) => {
          console.error('Error in long polling request:', error);
          longPollingRequest(); 
        });
    }, []);
    
    useEffect(() => {
        longPollingRequest(); 
    }, [longPollingRequest]);


    function fetchMessages() {
    axios
      .get('http://localhost:5000/api/messages', {
        params: {
          recipientEmail: selectedEmail,
          senderEmail: location.state.id,
        },
      })
      .then((response) => {
        setMessages(response.data.messages);
        console.log(messages);
      })
      .catch((error) => {
        console.error('Error fetching messages:', error);
      });
  }

  useEffect(() => {
    fetchMessages();

    const interval = setInterval(() => {
      fetchMessages();
    }, 5000); // Fetch messages every 5 seconds

    return () => {
      clearInterval(interval);
    };
  }, [selectedEmail, location.state.id]);

    

      
  return (
    <div>
    <h1>{location.state.id}</h1>
      <ChatPageNavBar users = {users}/>
      <Sidebar users={users} onSelectedUser={handleEmailUpdate} getProfilePicture={handleRecipientProfilePictureUpdate} getUsername={handleUsernameUpdate}/>
      <ChatPage users={users} messages={messages} senderId={location.state.id} recipientId={selectedEmail} recipientProfilePicture={recipientProfilePicture} recipientUsername={username}/>
    </div>
  )
}

export default MainPage
