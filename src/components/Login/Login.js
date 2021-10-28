import React from 'react';
import { Link } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';

const Login = () => {
    const {signInUsingGoogle} = useAuth();
    return (
        <div className="text-center p-5">
            <div className="mx-auto shadow w-50 p-5">
            <h3>Login with</h3>
            <button onClick={signInUsingGoogle} className="rounded-pill my-3"><i className="fab fa-google text-danger"></i><small className="mx-5">Continue with Google</small></button>
            <p>Don't have an account? <Link to="/register">create an account</Link></p>
            </div>
        </div>
    );
};

export default Login;