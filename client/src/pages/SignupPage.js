import React, {useState, useEffect} from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import validator from 'validator';
import { useNavigate } from 'react-router-dom';

function SignupPage() {
    //Check device state
    const [isMobile, setIsMobile] = useState(false);

    //Setting an error message
    const [signupMessage, setSignupMessage] = useState("")

    const messageToDisplay = (message) => {
        setSignupMessage(message)
    }

    useEffect(() => {
        const handleResize = () => {
        setIsMobile(window.innerWidth < 500);
        };

        handleResize();

        window.addEventListener('resize', handleResize);

        return () => {
        window.removeEventListener('resize', handleResize);
        };
    }, []);

    //Store login credentials

    const [username, setUsername] = useState("");
    const [email, setEmail] = useState("");
    const [profilePicture, setProfilePicture] = useState(null)
    const [gender, setGender] = useState('');
    const [countries, setCountries] = useState([]);
    const [selectedCountry, setSelectedCountry] = useState('');

    const [newPassword, setNewPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');

    const password = (newPassword === confirmPassword) ? newPassword : null

    useEffect(() => {
        const fetchCountries = async () => {
        try {
            const response = await fetch('https://restcountries.com/v3.1/all');
            const data = await response.json();
            setCountries(data);
        } catch (error) {
            console.error('Error fetching countries:', error);
        }
        };

        fetchCountries();
    }, []);

    const handleCountryChange = (event) => {
        setSelectedCountry(event.target.value);
    };

    const handleOptionChange = (event) => {
        setGender(event.target.value);
    };

    const location = useNavigate()

    const [isValid, setIsValid] = useState(null);
    
    const validateEmail = () => {
        setIsValid(validator.isEmail(email));
    };

    //Sending requests
    async function submit(e) {
        e.preventDefault();
        if (username !== ""){
            if (email !== ""){
                //Set validation for email
                validateEmail()
                if (isValid){
                    messageToDisplay("Email is valid")
    
                    if (profilePicture !== null){
                        messageToDisplay("Profile Picture is set!")
                        
                        if (gender !== ""){
                            messageToDisplay("Gender is set!")
                            
                            if (selectedCountry !== ""){
                                messageToDisplay("Country is set!")
    
                                //passwords
                                if (newPassword !== ""){
                                    messageToDisplay("New password is set!")
                                    
                                    if (confirmPassword !== ""){
                                        messageToDisplay("Confirm password is set!")

                                        if (newPassword.length >= 6){
                                            messageToDisplay("Password is set!")
                                            if (confirmPassword.length >= 6){
                                                messageToDisplay("Confirm password is set!")

                                                if (password !== null) {
                                                    try {
                                                      const formData = new FormData();
                                                      formData.append('username', username);
                                                      formData.append('email', email);
                                                      formData.append('profilePicture', profilePicture); 
                                                      formData.append('gender', gender);
                                                      formData.append('selectedCountry', selectedCountry);
                                                      formData.append('password', password);
                                                
                                                      const response = await axios.post('http://localhost:5000/signup', formData);
                                                      if (response.data === 'exist') {
                                                        messageToDisplay("User already exists")
                                                      } else if (response.data === 'notexist') {
                                                        messageToDisplay("Account created successfully")
                                                        alert("Account created successfully")
                                                        location('/login');
                                                      }
                                                    } catch {
                                                      messageToDisplay("An error occured!")
                                                    }
                                                  } else {
                                                    // Handle case where password is null
                                                    messageToDisplay("Passwords does not match")
                                                  }
                                         
                                            }
                                            else{
                                                messageToDisplay("Confirm password length should be >= 6")
                                            }
                                        }
                                        else{
                                            messageToDisplay("New Password length should be >= 6")
                                        }
                
                                    }
                                    else {
                                        messageToDisplay("Confirm password field cannot be empty")
                                    }
                                }
                                else{
                                    messageToDisplay("New password field cannot be empty")
                                }
                                
                            }
                            else{
                                messageToDisplay("Country field is required!")
                            }
                        }
                        else{
                            messageToDisplay("Gender field is required!")
                        }
                    }
                    else{
                        messageToDisplay("Profile picture field is required")
                    }
                    
                }
                else{
                    messageToDisplay("Email is not valid")
                }
            }
            else{
                messageToDisplay("Email field is required!")
            }

        }
        else {
            messageToDisplay("Username field is required")
        }
        
        
      } 

    return (
        <div className="signup-container flex items-center justify-center min-h-screen bg-gray-100 overflow-hidden" style={{ height : isMobile ? "auto" : "100vh"}}>
        <div className="w-full max-w-sm p-6 bg-white rounded-lg shadow overflow-y-scroll" style={{ height : isMobile ? "auto" : "90vh"}}>
            <div className="flex items-center justify-center">
            <img src="logo.jpeg" alt="Logo" width={100} height={100} />
            </div>
            <h2 className="text-2xl font-bold text-center mb-6">Sign Up</h2>
            {signupMessage !== "" && 
                <div className='bg-red-100 text-red-500 mb-3 rounded text-center font-bold p-3'>
                    <small>{signupMessage}</small>
                </div>
            }
            
            <form>
            <div className="mb-4">
                <label htmlFor="username" className="block mb-2 text-sm font-medium text-gray-700">
                Username
                </label>
                <input
                type="text"
                id="username"
                className="w-full px-3 py-2 placeholder-gray-400 border rounded-lg focus:outline-none focus:ring focus:ring-blue-300"
                placeholder="Enter your full name"
                required
                onChange={(e) => {setUsername(e.target.value)}}
                />
            </div>

            <div className="mb-4">
                <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-700">
                Email
                </label>
                <input
                type="email"
                id="email"
                className="w-full px-3 py-2 placeholder-gray-400 border rounded-lg focus:outline-none focus:ring focus:ring-blue-300"
                placeholder="Enter your email"
                required
                onChange={(e) => {setEmail(e.target.value)}}
                />
            </div>

            <div className="mb-4">
                <label htmlFor="profilepicture" className="block mb-2 text-sm font-medium text-gray-700">
                Profile Picture
                </label>
                <input
                type="file"
                id="profilepicture"
                className="w-full px-3 py-2 placeholder-gray-400 border rounded-lg focus:outline-none focus:ring focus:ring-blue-300"
                accept="image/*"
                required
                onChange={(e) => {setProfilePicture(e.target.files[0])}}
                />
            </div>

            <div>
                <label htmlFor="genderSelect" className="block text-gray-700 text-sm font-bold mb-2">
                    Select Gender:
                </label>
                <select
                    id="genderSelect"
                    value={gender}
                    onChange={handleOptionChange}
                    className="block appearance-none w-full bg-white border border-gray-300 hover:border-gray-500 px-4 py-2 rounded shadow leading-tight focus:outline-none focus:border-blue-500"
                >
                    <option value="">Select</option>
                    <option value="male">Male</option>
                    <option value="female">Female</option>
                    <option value="other">Other</option>
                </select>
            </div>

            <div>
                <label htmlFor="countrySelect" className="block text-gray-700 text-sm font-bold mb-2">
                    Select Country:
                </label>
                <select
                    id="countrySelect"
                    value={selectedCountry}
                    onChange={handleCountryChange}
                    className="block appearance-none w-full bg-white border border-gray-300 hover:border-gray-500 px-4 py-2 rounded shadow leading-tight focus:outline-none focus:border-blue-500"
                >
                    <option value="">Select</option>
                    {countries.map((country) => (
                    <option key={country.name.common} value={country.name.common}>
                        {country.name.common}
                    </option>
                    ))}
                </select>
            </div>

            <div className="mb-4">
                <label htmlFor="password" className="block mb-2 text-sm font-medium text-gray-700">
                New Password
                </label>
                <input
                type="password"
                id="password"
                className="w-full px-3 py-2 placeholder-gray-400 border rounded-lg focus:outline-none focus:ring focus:ring-blue-300"
                placeholder="Enter your new password"
                required
                onChange={(e) => {setNewPassword(e.target.value)}}
                />
            </div>

            <div className="mb-6">
                <label htmlFor="confirmpassword" className="block mb-2 text-sm font-medium text-gray-700">
                Confirm Password
                </label>
                <input
                type="password"
                id="confirmpassword"
                className="w-full px-3 py-2 placeholder-gray-400 border rounded-lg focus:outline-none focus:ring focus:ring-blue-300"
                placeholder="Confirm your new password"
                required
                onChange={(e) => {setConfirmPassword(e.target.value)}}
                />
            </div>

            <div className="flex items-center justify-between">
                <button onClick={submit}
                type="submit"
                className="w-full bg-gradient-to-r from-red-500 to-blue-500 hover:bg-gradient-to-r hover:from-blue-500 hover:to-red-500 text-white font-bold py-3 px-4 rounded mt-2"
                >
                Sign Up
                </button>
            </div>

            <div className="mt-4">
                <p>
                Already have an account?{' '}
                <Link to="/login" className="text-sm text-gray-600 hover:underline">
                    Login
                </Link>
                </p>
            </div>
            </form>
        </div>
        </div>
    );
}

export default SignupPage;
