import React from 'react';
import { useContext } from 'react';
import { Link } from 'react-router-dom';
import { UserContext } from '../../App';
import './Header.css';

const Header = () => {
    
    const [loggedInUser , setLoggedInUser] = useContext(UserContext);

    return (
        <div>
            <nav class="navbar navbar-expand-lg navbar-light bg-light">
            <div class="container-fluid">
                    <Link class="navbar-brand px-5 mx-5"href="#" to="/home">Deshi Rides</Link>
                <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse" id="navbarNav">
                    <ul class="navbar-nav">
                        <li class="nav-item">
                            <Link class="nav-link active" aria-current="page" to="/home">Home</Link>
                        </li>
                        <li class="nav-item">
                            <Link class="nav-link" aria-current="page" to="/destination">Destination</Link>
                        </li>
                        {
                            loggedInUser.displayName ? <li class="nav-item">
                            <p class="nav-link" aria-current="page">{loggedInUser.displayName}</p>
                            </li> :
                            <li class="nav-item btn btn-success">
                                <Link class="nav-link" aria-current="page" to="/login">Login</Link>
                            </li>
                        }
                    </ul>
                </div>
            </div>
            </nav>
        </div>
    );
};

export default Header;