// src/components/Signup.jsx
import React from 'react';
import { useNavigate } from 'react-router-dom';

const Signup = (props) => {
  const user = props.users;
  const setuser = props.setuser;
  const username = props.username;
  const password = props.password;
  const setUsername = props.setUsername;
  const setPassword = props.setPassword;

  const navigate = useNavigate();

  function handleUname(event) {
    setUsername(event.target.value);
  }

  function handlePass(event) {
    setPassword(event.target.value);
  }

  function checkUser(event) {
    event.preventDefault();

    setuser([...user, { usern: username, pass: password }]);
    alert("Signup Successful");

    navigate('/');
  }

  return (
    <div className="bg-black min-h-screen flex items-center justify-center">
      <div className="bg-gray-100 p-10 border rounded-2xl w-full max-w-md">
        <h1 className="text-3xl font-bold mb-4 text-center">Hey Hi</h1>
        <p className="text-center mb-6">You can signup here :)</p>

        <form onSubmit={checkUser} className="space-y-4">
          <input
            type="text"
            placeholder="Username"
            value={username}
            onChange={handleUname}
            className="w-full p-2 border rounded bg-white text-black placeholder-gray-500"
          />

          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={handlePass}
            className="w-full p-2 border rounded bg-white text-black placeholder-gray-500"
          />

          <button
            type="submit"
            className="w-full bg-yellow-400 text-black font-semibold p-2 rounded hover:bg-yellow-500 transition"
          >
            Sign Up
          </button>
        </form>
      </div>
    </div>
  );
};

export default Signup;
