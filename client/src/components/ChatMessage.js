import React from 'react';

const ChatMessage = ({username, email, profilePicture, time, message, isSender }) => {
  return (
    <div className={`flex items-start py-4 ${isSender ? 'flex-row-reverse' : ''}`}>
        <img className="w-12 h-12 rounded-full mr-4" src={"https://mernstack-chat-app-backend.onrender.com/uploads/" + profilePicture} alt={profilePicture} />
        <div>
            <div className="flex items-center mb-1">
              <small style={{fontSize: '11px'}} className={`text-gray-500 ml-2 ${isSender ? 'mr-4' : ''}`}>{time}</small>
            </div>
            <div className={`p-3 rounded-tl-lg rounded-br-lg ${isSender ? 'bg-purple-500 text-white m-3' : 'bg-gray-100'}`}>
              <p className={`text-sm ${isSender ? 'text-white' : 'text-gray-800'}`}>{message}</p>
            </div>
        </div>
    </div>

  );
};

export default ChatMessage;
console.lokcon;
