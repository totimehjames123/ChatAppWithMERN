import React, { useState } from 'react';
import axios from 'axios';

const ChatItem = ({ email, username, profilePicture, message, time }) => {

  async function selectChatItem () {
    try{
      sessionStorage.setItem("recipientEmail", email);
      sessionStorage.setItem("recipientUsername", username);
      sessionStorage.setItem("recipientProfilePicture", profilePicture);

      const senderEmail = sessionStorage.getItem('senderEmail')
      const recipientEmail = sessionStorage.getItem('recipientEmail')

      const url = `http://localhost:5000/store?senderEmail=${senderEmail}&recipientEmail=${recipientEmail}`;
       
      const response = await axios.get(url)
      
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


