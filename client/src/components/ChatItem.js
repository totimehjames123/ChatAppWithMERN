import React, { useState } from 'react';
import axios from 'axios';

const ChatItem = ({ email, username, profilePicture, message, time }) => {

  const [senderEmail, setSenderEmail] = useState(sessionStorage.getItem("recipientEmail"))
  const [recipientEmail, setRecipientEmail] = useState(sessionStorage.getItem("recipientEmail"))

  async function selectChatItem () {
    try{
      sessionStorage.setItem("recipientEmail", email);
      sessionStorage.setItem("recipientUsername", username);
      sessionStorage.setItem("recipientProfilePicture", profilePicture);
       
      const response = await axios.post('http://localhost:5000/selectmessages', {
        senderEmail: sessionStorage.getItem('senderEmail'),
        recipientEmail: sessionStorage.getItem('recipientEmail'),
      })
      
      if (response.data.status == "ok"){
        sessionStorage.setItem("selectedMessages", JSON.stringify(response.data.data))
        
      }
      else{
        alert("failed to select data")
      }
    }
    catch(e){
      alert(e,"nothing")
    }
    
  }

  return (
      <div onClick={selectChatItem} className="flex items-center py-4 hover:bg-gray-100 transition-colors duration-300 p-3 rounded-lg">
          <img className="w-12 h-12 rounded-full mr-4" src={"http://localhost:5000/uploads/" + profilePicture}  alt={username} />
          <div className="flex-grow w-2/5">
              <h3 className="text-md font-medium">{username}</h3>
              <p className="text-sm text-gray-500 w-4/5 overflow-hidden whitespace-nowrap max-w-xs truncate">{message}</p>
          </div>
          <div className="flex-shrink-0 ml-auto">
              <p className="text-sm text-gray-500">{time}</p>
          </div>
      </div>
        
  );
};

export default ChatItem;


