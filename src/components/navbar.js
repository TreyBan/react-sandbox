import React from "react";
import Search from "./search";
import {Link} from "react-router-dom";

export default function Navbar () {
    return (
        <nav className="container navbar navbar-expand-lg navbar-dark bg-dark rounded-bottom">
            <Link to="/" className="navbar-brand">
                Prog<span className='logo'>Hub</span>
            </Link>

            <button className="navbar-toggler"
                    type="button"
                    data-toggle="collapse"
                    data-target="#navbarNavAltMarkup"
                    aria-controls="navbarNavAltMarkup"
                    aria-expanded="false" >
                <span className="navbar-toggler-icon" />
            </button>

            <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                <Search />
                <Link to='/create' className='btn btn-warning ml-3 text-dark' href='/'>
                    <svg style={{'marginTop': '-3px'}} width="1.5em" height="1.5em" viewBox="0 0 16 16"
                         xmlns="http://www.w3.org/2000/svg">
                        <path fillRule="evenodd"
                              d="M8 4a.5.5 0 0 1 .5.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3A.5.5 0 0 1 8 4z"/>
                    </svg>
                </Link>
            </div>
        </nav>
    );

}