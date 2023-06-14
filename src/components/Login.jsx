import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  async function loginUser(event) {
    event.preventDefault();
    const res = await fetch("http://localhost:4000/api/login", {
      method: "POST",
      headers: {
        "Content-type": "application/json",
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
    <div>
      <h1>Login</h1>
      <form onSubmit={loginUser}>
        <input
          type="email"
          value={email}
          placeholder="Email"
          required
          onChange={(e) => setEmail(e.target.value)}
          className="border border-black"
        />{" "}
        <br />
        <input
          type="password"
          value={password}
          placeholder="Password"
          required
          onChange={(e) => setPassword(e.target.value)}
          autoComplete="on"
          className="border border-black"
        />
        <br />
        <input
          type="submit"
          value="Login"
          className="border border-black rounded px-4 bg-blue-500 hover:bg-blue-200"
        />
        <h3>
          New User ?{" "}
          <Link to="/register" className="underline">
            {" "}
            Please register here first.
          </Link>
        </h3>
      </form>
    </div>
  );
};

export default Login;
