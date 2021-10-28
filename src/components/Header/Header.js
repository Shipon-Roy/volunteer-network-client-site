import React from 'react';
import { Link } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';
import logo from '../../images/Group 1329.png';
import './Header.css';

const Header = () => {
    const {user, logout} = useAuth();
    return (
        <div className="sticky-top">
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
                <div className="container">
                    <a className="navbar-brand" href="#">
                        <img className="w-25" src={logo} alt="" />
                    </a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav mx-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                        <Link className="nav-link active" to="/home">Home</Link>
                        </li>
                        <li className="nav-item">
                        <Link className="nav-link active" to="/donation">Donation</Link>
                        </li>
                        <li className="nav-item">
                        <Link className="nav-link active" to="/events">Events</Link>
                        </li>
                        <li className="nav-item">
                        <Link className="nav-link active" to="/blog">Blog</Link>
                        </li>
                    </ul>
                    </div>

                    <img className="rounded-circle email-img" src={user.photoURL} alt="" />
                    <small className="mx-3">{user.displayName}</small>
                    {user.email ? <button onClick={logout} className="btn btn-primary me-3">LogOut</button>
                    :
                    <Link to="/login"><button className="btn btn-primary me-3">Register</button></Link>}
                    <button className="btn btn-secondary">Addim</button>
                </div>
            </nav>
        </div>
    );
};

export default Header;