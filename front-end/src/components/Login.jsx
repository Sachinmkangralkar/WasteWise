import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import back from './assets/bg5.jpg';
import { faTrashCan } from '@fortawesome/free-solid-svg-icons'; // Import faTrashCan icon
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'; // Import FontAwesomeIcon




function Login({ onLogin }) {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const navigate = useNavigate();

    const handleLogin = (event) => {
        event.preventDefault();
        axios.post('http://localhost:8003/api/users/login', { email, password })
            .then(response => {
                onLogin();
                navigate('/');  // Navigate to home page after successful login
            })
            .catch(error => {
                setError('Invalid email or password');
            });
    };

    return (
        <div className="min-h-screen flex flex-col"
            style={{
                backgroundImage: `url(${back})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                backgroundRepeat: 'no-repeat'
            }}>
            <div className="flex items-center"> {/* Wrap icon and app name */}
                <FontAwesomeIcon icon={faTrashCan} className="text-white text-4xl hover:text-gray-300 mr-4" /> {/* Icon with styles */}
                <a href="#" className="text-white text-4xl font-bold">WasteWise</a> {/* Adjusted font size */}
            </div>
        <div className="flex justify-center items-center min-h-screen">
            <div className="bg-white p-8 rounded shadow-md w-80">
                <h2 className="text-2xl mb-6 text-center">Login</h2>
                <form onSubmit={handleLogin}>
                    <div className="mb-4">
                        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="email">
                            Email
                        </label>
                        <input
                            type="email"
                            name="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            required
                            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        />
                    </div>
                    <div className="mb-6">
                        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="password">
                            Password
                        </label>
                        <input
                            type="password"
                            name="password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            required
                            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        />
                    </div>
                    {error && <p className="text-red-500 text-xs italic mb-4">{error}</p>}
                    <div className="flex items-center justify-between">
                        <button
                            type="submit"
                            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                        >
                            Sign In
                        </button>
                    </div>
                </form>
            </div>
            </div>
        </div>
    );
}

export default Login;
