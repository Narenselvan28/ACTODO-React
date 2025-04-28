// src/index.js
import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import { useState } from 'react';
import App from './App';
import Login from './components/Login';
import Signup from './components/Signup';

function ProtectedRoute({ isLoggedIn, children }) {
    if (!isLoggedIn) {
        return <Navigate to="/" />;
    }
    return children;
}

function Appp() {

    const [user, setuser] = useState([
        {
            usern: "naren",
            pass: "Naren@123"
        }
    ]);
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [isLoggedIn, setIsLoggedIn] = useState(false);

    return (
        <BrowserRouter>
            <Routes>
                <Route
                    path="/"
                    element={
                        <Login
                           
                            users={user}
                            setuser={setuser}
                            username={username}
                            password={password}
                            setUsername={setUsername}
                            setPassword={setPassword}
                            setIsLoggedIn={setIsLoggedIn}
                        />
                    }
                />
                <Route
                    path="/signup"
                    element={
                        <Signup
                            users={user}
                            setuser={setuser}
                            username={username}
                            password={password}
                            setUsername={setUsername}
                            setPassword={setPassword}
                        />
                    }
                />
                <Route
                    path="/app"
                    element={
                        <ProtectedRoute isLoggedIn={isLoggedIn}>
                            <App  />
                        </ProtectedRoute>
                    }
                />
            </Routes>
        </BrowserRouter>
    );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<Appp />);
