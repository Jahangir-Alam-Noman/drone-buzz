import React from 'react';
import useAuth from '../../../hooks/useAuth';
// import useFirebase from '../../../hooks/useFirebase';
import './Login.css';

const Logins = () => {
    const { signInWithGoogle, user } = useAuth();
    return (
        <div>
            <h2>This is login page {user.displayName}</h2>
            <button onClick={signInWithGoogle}>google</button>

        </div>
    );
};

export default Logins;