import React from 'react';

const Nav = () => {
    return (
        <nav className="navbar navbar-expand-lg navbar-light">
            <div className="container">
                <a className="navbar-brand" href="#"></a>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav ml-auto">
                        <li className="nav-item mr-4">
                            <a className="nav-link font-weight-bold " href="#">Home <span className="sr-only">(current)</span></a>
                        </li>
                        <li className="nav-item mr-4">
                            <a className="nav-link font-weight-bold " href="#">About</a>
                        </li>
                        <li className="nav-item mr-4">
                            <a className="nav-link font-weight-bold " href="#">Dental Services</a>
                        </li>
                        <li className="nav-item mr-4">
                            <a className="nav-link font-weight-bold text-white" href="#">Reviews</a>
                        </li>
                        <li className="nav-item mr-4">
                            <a className="nav-link font-weight-bold text-white" href="#">Blogs</a>
                        </li>
                        <li className="nav-item mr-4">
                            <a className="nav-link font-weight-bold text-white" href="#">Contact Us</a>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    );
};

export default Nav;