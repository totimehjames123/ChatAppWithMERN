import { useState } from 'react';
import { Link, useNavigate} from 'react-router-dom';
import axios from 'axios'

function LoginPage() {
    const location = useNavigate()

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const [loginError, setLoginError] = useState('');
    
    async function submit(e){
        e.preventDefault()

        try{
            await axios.post('http://localhost:5000/login', {
                email, password
            }).then (res => {
                if (res.data.status === "ok"){
                    
                    console.log(res.data.data)
                    
                    sessionStorage.setItem("senderEmail", email);
                    sessionStorage.setItem("senderUsername", res.data.data.username);
                    sessionStorage.setItem("senderProfilePicture", res.data.data.profilePicture)
                    sessionStorage.setItem("senderGender", res.data.data.gender)
                    
                    location("/mainpage")
                }
                else if (res.data === "notexist"){
                    setLoginError('Invalid email or password!');
                }
            })
            .catch (e => {
                alert (e)
            })
        }
        catch{
            setLoginError("An error occured! Please try again")
        }
  }
 
  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="w-full max-w-sm p-6 bg-white rounded-lg shadow">
        <div className='flex items-center justify-center'>
            <img src='logo.jpeg' alt='My Logo' width={100} height={100}/>
        </div>
        <h2 className="text-2xl font-bold text-center mb-6">Login</h2>

        {loginError !=='' && 
          <div className='text-red-600 p-2 bg-red-200 mb-2 text-center font-bold rounded'>{loginError}</div>
        }

        <form action='POST'>
          <div className="mb-4">
            <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-700">Email</label>
            <input
              type="email"
              id="email"
              className="w-full px-3 py-2 placeholder-gray-400 border rounded-lg focus:outline-none focus:ring focus:ring-blue-300"
              placeholder="Enter your email"
              required
              onChange={(e) => {setEmail(e.target.value)}}
            />
          </div>
          
          <div className="mb-6">
            <label htmlFor="password" className="block mb-2 text-sm font-medium text-gray-700">Password</label>
            <input
              type="password"
              id="password"
              className="w-full px-3 py-2 placeholder-gray-400 border rounded-lg focus:outline-none focus:ring focus:ring-blue-300"
              placeholder="Enter your password"
              required
              onChange={(e) => {setPassword(e.target.value)}}
            />
          </div>
          
          <div className="flex items-center justify-between">
            

            <input onClick={submit} value="Login" type="submit" className="w-full bg-gradient-to-r from-red-500 to-blue-500 hover:bg-gradient-to-r hover:from-blue-500 hover:to-red-500 text-white font-bold py-3 px-4 rounded mt-2" />

          </div>
          <div className='mt-4'>
            <p>Don't have an account? <Link to="/signup" className="text-sm text-gray-600 hover:underline">Sign Up</Link></p>
          </div>
        </form>
      </div>
    </div>
  );
}

export default LoginPage;
