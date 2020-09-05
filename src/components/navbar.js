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
                    Add
                </Link>
            </div>
        </nav>
    );

}