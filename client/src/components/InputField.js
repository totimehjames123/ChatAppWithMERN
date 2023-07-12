import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPaperPlane, faSmile, faMicrophone } from '@fortawesome/free-solid-svg-icons';

function InputField() {
  return (
    <div className="flex items-center bg-white border-white rounded-full p-4">
      <button className="mr-2">
        <FontAwesomeIcon icon={faSmile} className="text-gray-500" />
      </button>
      <input
        type="text"
        placeholder="Type your message..."
        className="flex-grow outline-none focus:outline-none"
      />
      <button className="mx-2">
        <FontAwesomeIcon icon={faMicrophone} className="text-green-500" />
      </button>
      <button className="ml-2">
        <FontAwesomeIcon icon={faPaperPlane} className="text-purple-500" />
      </button>
    </div>
  );
}

export default InputField;
