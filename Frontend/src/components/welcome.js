import React from 'react';
import { useAuth } from '../context/AuthContext';

const Welcome = () => {
    const { user } = useAuth();

    return (
        <div className="container text-center">
            <h1>Welcome, {user ? user.username : 'Guest'}!</h1>
            <p><span>Thank you</span> for staying with us</p>
        </div>
    );
};

export default Welcome;
