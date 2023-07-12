import React from 'react';
import {Link} from 'react-router-dom'

function HomePageBody() {
  return (
    <div className="flex flex-col items-center justify-center h-80vh sm:flex-row px-10">
      <div className="w-full sm:w-1/2 flex items-center justify-center">
        <div className="max-w-xs mx-auto sm:max-w-none pl-24">
          <p className="text-5xl font-bold" style={{fontSize: '50px'}}>
            {/* <span style={{backgroundImage: 'linear-gradient(to right, red, blue)', WebkitBackgroundClip: 'text',backgroundClip: 'text', color: 'transparent', display: 'inline-block'}}>Chat</span>
            <span style={{backgroundImage: 'linear-gradient(to left, black, gray, lightgray)', WebkitBackgroundClip: 'text',backgroundClip: 'text', color: 'transparent', display: 'inline-block'}}>App</span> */}
            <span>ChatApp</span>
          </p>
          <p className="typing-text mt-8 mb-8">
            Have fun, learn and connect <br /> with people here.
          </p>
          <div className="w-full">
            <Link
                to="/signup"
                className="block bg-gradient-to-r from-red-500 to-blue-500 hover:bg-gradient-to-r hover:from-blue-500 hover:to-red-500 text-white font-bold py-4 px-4 rounded mt-2 text-center"
            >
                Get started
            </Link>
        </div>


          
        </div>
      </div>
      <div className="w-full sm:w-1/2 sm:mt-0 flex items-center justify-center">
        <img className="max-w-full h-auto" src="conversation.jpeg" width={300} height={300} alt="ConversationImage " />
      </div>
    </div>
  );
}

export default HomePageBody;
