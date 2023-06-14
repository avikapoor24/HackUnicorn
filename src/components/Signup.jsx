import React, { useState } from 'react';

const LoginPage = () => {
  const [darkMode, setDarkMode] = useState(false);
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleDarkModeToggle = () => {
    setDarkMode(!darkMode);
  };

  const handleUsernameChange = (e) => {
    setUsername(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle login form submission logic here
  };

  return (
    
    <div
      className={`flex flex-col items-center justify-center min-h-screen ${
        darkMode ? 'bg-gray-900 text-white' : 'bg-black text-black'
      }`}
    >
     
      <h1 className="text-9xl font-bold  text-white mb-4">Login</h1>
      <form className="bg-gray-100 rounded shadow-lg px-8 py-6" onSubmit={handleSubmit}>
        <div className="mb-4">
          <label htmlFor="username" className="block mb-5 text-4xl">
            Username
          </label>
          <input
            type="text"
            id="username"
            className="w-full border border-gray-300 rounded px-3 py-2"
            value={username}
            onChange={handleUsernameChange}
          />
        </div>
        <div className="mb-4">
          <label htmlFor="password" className="block mb-2 text-4xl">
            Password
          </label>
          <input
            type="password"
            id="password"
            className="w-full border border-gray-300 rounded px-3 py-2"
            value={password}
            onChange={handlePasswordChange}
          />
        </div>
        <button
          type="submit"
          className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded"
        >
          Log in
        </button>
      </form>
    </div>
  );
};

export default LoginPage;
