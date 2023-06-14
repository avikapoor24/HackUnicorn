import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const Register = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  async function registerUser(event) {
    event.preventDefault();
    const response = await fetch("http://localhost:4000/api/register", {
      method: "POST",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify({
        name,
        email,
        password,
      }),
    });

    const data = await response.json();
    console.log(data);
    if (data.status === "Ok!") {
      navigate("/login");
    }
  }

  return (
    <div>
      <h1> Register </h1>
      <form onSubmit={registerUser}>
        <input
          type="text"
          placeholder="Full Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
          className="border border-black"
        />{" "}
        <br />
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
          className="border border-black"
        />{" "}
        <br />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
          className="border border-black"
          autoComplete="on"
        />{" "}
        <br />
        <input
          type="submit"
          value="Register"
          className="border border-black rounded px-4 bg-blue-500 hover:bg-blue-200"
        />
      </form>
      <h3>
        Already a user?{" "}
        <Link to="/login" className="underline">
          Click her to login !!{" "}
        </Link>
      </h3>
    </div>
  );
};

export default Register;
