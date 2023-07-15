import React, {useState} from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPaperPlane, faSmile, faMicrophone } from '@fortawesome/free-solid-svg-icons';
import axios from 'axios';

function InputField({senderId, recipientId, recipientProfilePicture, recipientUsername}) {

  const [message, setMessage] = useState('');
   

  async function sendTextMessage(e){
    e.preventDefault();
    if (message.trim() === '') {
      alert (senderId + " " + recipientId + " " + recipientProfilePicture + " " + recipientUsername)
    }
    else {
      try{
        const response = await axios.post('http://localhost:5000/sendmessage', {
          senderEmail: senderId,
          recipientEmail: recipientId,
          senderUsername: sessionStorage.getItem('senderUsername'),
          recipientUsername: recipientUsername,
          senderProfilePicture: sessionStorage.getItem('senderProfilePicture'),
          recipientProfilePicture: recipientProfilePicture,
          message, 
        })

        if (response.data.status === 200){
          alert("Message sent successfully!")
        }
        
      }
      catch(err){
        alert(err)
      }

    }
  }
  

  return (
      <div className="flex items-center bg-white border-white rounded-full p-4">
        <button className="mr-2">
          <FontAwesomeIcon icon={faSmile} className="text-gray-500" />
        </button>
        <input
          type="text"
          placeholder="Type your message..."
          className="flex-grow outline-none focus:outline-none"
          onChange={(e) => setMessage(e.target.value)}
        />
        <button className="mx-2" style={{visibility: message.trim(senderId) !== '' ? 'hidden' : 'visible'}}>
          <FontAwesomeIcon icon={faMicrophone} className="text-green-500" />
        </button>
        <button className="ml-2" onClick={sendTextMessage.bind()}>
          <FontAwesomeIcon icon={faPaperPlane} className="text-purple-500" />
        </button>
      </div>
  );
}

export default InputField;
