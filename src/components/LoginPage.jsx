import React, { useState } from "react";
import {  useNavigate } from "react-router-dom";

const LoginPage = () => {

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };


  // const url = "https://finovatech-data.onrender.com";
  const url = "https://localhost:4000";


  async function loginUser(event) {
    event.preventDefault();
    const res = await fetch(`${url}/api/login`, {
      method: "POST",
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': '*'
      },
      body: JSON.stringify({
        email,
        password,
      }),
    });

    const data = await res.json();
    console.log(data);
    if (data.user) {
      localStorage.setItem("token", data.user);
      alert("Login successful");
      navigate("/portfolio");
    } else {
      alert("Please check your credentials!!");
    }
  }



  return (
    <div className="flex flex-col items-center justify-center min-h-screen text-black">
      <h1 className="text-9xl font-bold  text-white mb-4">Login</h1>
      <h1 className="text-9xl font-bold cursor-pointer  text-white mb-4" onClick={()=> navigate("/signup")}>New User ?   </h1>
      <h1 className="text-9xl font-bold cursor-pointer  text-red-600 mb-4" onClick={()=> navigate("/signup")}> Subscribe first  </h1>
      <form
        className="bg-gray-100 rounded shadow-lg px-8 py-6 w-8/12"
        onSubmit={loginUser}
      >
       
        <div className="mb-4">
          <label htmlFor="email" className="block mb-5 text-4xl">
            Email
          </label>
          <input
            type="email"
            id="email"
            className="w-full border border-gray-300 rounded px-3 py-2"
            value={email}
            onChange={handleEmailChange}
          />
        </div>
        <div className="mb-4">
          <label htmlFor="password" className="block mb-5 text-4xl">
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
          type="submit" // Added type="submit"
          className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded"
        >
          Log in
        </button>
      </form>
    </div>
  );
};

export default LoginPage;
