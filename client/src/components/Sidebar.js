import React, { useState } from 'react';
import './../index.css';
import './../App.css';
import ChatItem from './ChatItem';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';

function Sidebar({ users, onSelectedUser, getProfilePicture, getUsername }) {
  const [userEmail, setUserEmail] = useState('');
  const [profilePicture, setProfilePicture] = useState('');
  const [username, setUsername] = useState('');

  const [searchQuery, setSearchQuery] = useState('');

  const handleUserSelection = (email, profilePicture, username) => {
    setUserEmail(email);
    onSelectedUser(email);
    setProfilePicture(profilePicture);
    getProfilePicture(profilePicture);
    setUsername(username);
    getUsername(username);
  };

  const filteredUsers = users.filter((user) =>
    user.username.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const noSearchFoundMessage = (
    <div className="text-center p-4 text-gray-500">No users found with the search query: {searchQuery}</div>
  );

  return (
    <div className="relative side-bar-container bg-gray-50">
      <div className="w-full p-5 flex items-center justify-center" style={{ minHeight: '10vh' }}>
        <div className="relative w-full ">
          <input
            type="text"
            placeholder="Search"
            className="py-3 pl-11 pr-4 rounded-full focus:outline-none focus:ring-none w-full"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
          <FontAwesomeIcon icon={faSearch} className="absolute top-4 left-4 text-gray-500" />
        </div>
      </div>

      <div className="flex items-center justify-center ">
        <div
          className="bg-white p-5 h-64 overflow-y-scroll"
          style={{ borderRadius: '30px', width: '90%', height: '70vh' }}
        >
          <div className="overflow-x-hidden">
            {filteredUsers.length === 0 ? (
              /* If no users found, display the "No search found" message */
              noSearchFoundMessage
            ) : (
              /* Otherwise, display the list of filtered users */
              filteredUsers.map((user) => (
                <div
                  key={user._id}
                  className={userEmail === user.email ? 'bg-gray-100 rounded' : ''}
                  onClick={() =>
                    handleUserSelection(user.email, user.profilePicture, user.username)
                  }
                >
                
                  {sessionStorage.getItem("senderEmail") === user.email ?
                  ""
                  : 
                  <ChatItem
                    email={user.email}
                    username={user.username}
                    profilePicture={user.profilePicture}
                    message={user.email}
                    time="12:34am"
                  />
                  }
                  
                </div>
              ))
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Sidebar;
