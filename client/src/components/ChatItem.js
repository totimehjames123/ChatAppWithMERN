import React from 'react';

const ChatItem = ({ email, username, profilePicture, message, time }) => {

  return (
      <div className="flex items-center py-4 hover:bg-gray-50 transition-colors duration-300 p-3 rounded-lg">
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


