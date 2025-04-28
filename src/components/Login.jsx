// src/components/Login.jsx
import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';

const Login = (props) => {
  const [reguser, setreguser] = useState(true);
  const navigate = useNavigate();

  const user = props.users;
  const setuser = props.setuser;
  const username = props.username;
  const password = props.password;
  const setUsername = props.setUsername;
  const setPassword = props.setPassword;
  const setIsLoggedIn = props.setIsLoggedIn;

  function handleuname(event) {
    setUsername(event.target.value);
  }

  function handlepass(event) {
    setPassword(event.target.value);
  }

  function checkuser(event) {
    event.preventDefault(); // prevent reload
    var sethomename = props.sethomename;
    let found = false;

    user.forEach(uitem => {
      if (username === uitem.usern && password === uitem.pass) {
        found = true;
      }
    });

    if (found) {
      alert("Login Successful");
      setIsLoggedIn(true);
      navigate('/app', { state: { name: username } });
    } else {
      alert("Login Failed");
      setreguser(false);
    }
  }

  return (
    <div className="bg-black min-h-screen flex items-center justify-center">
      <div className="bg-gray-100 p-10 border rounded-2xl w-full max-w-md">
        <h1 className="text-3xl font-bold mb-4 text-center">Welcome Back!</h1>
        {
          reguser ? (
            <p className="text-center mb-6">I help you manage your Activities</p>
          ) : (
            <p className="text-center text-red-800 mb-6">Please Signup Before You Login</p>
          )
        }
        <form onSubmit={checkuser} className="space-y-4">
          <input
            type="text"
            placeholder="Username"
            value={username}
            onChange={handleuname}
            className="w-full p-2 border rounded bg-white text-black placeholder-gray-500"
          />

          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={handlepass}
            className="w-full p-2 border rounded bg-white text-black placeholder-gray-500"
          />

          <button
            type="submit"
            className="w-full bg-yellow-400 text-black font-semibold p-2 rounded hover:bg-yellow-500 transition"
          >
            Login
          </button>
        </form>

        <p className="text-center mt-6 text-sm">
          Don't have an account?{' '}
          <Link to="/signup" className="text-blue-600 hover:underline font-semibold">
            Sign Up
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Login;
