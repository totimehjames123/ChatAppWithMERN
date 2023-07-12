import React from 'react';

const ChatMessage = ({ profilePicture, name, time, message, isSender }) => {
  return (
    <div className={`flex items-start py-4 ${isSender ? 'flex-row-reverse' : ''}`}>
        <img className="w-12 h-12 rounded-full mr-4" src={profilePicture} alt={name} />
        <div>
            <div className="flex items-center mb-1">
            <p className={`text-sm text-gray-500 ml-2 ${isSender ? 'ml-4' : ''}`}>{time}</p>
            </div>
            <div className={`p-3 rounded-tl-lg rounded-br-lg ${isSender ? 'bg-purple-500 text-white m-3' : 'bg-gray-100'}`}>
                <p className={`text-sm ${isSender ? 'text-white' : 'text-gray-800'}`}>{message}</p>
            </div>
        </div>
    </div>

  );
};

export default ChatMessage;
