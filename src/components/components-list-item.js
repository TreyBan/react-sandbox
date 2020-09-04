import React from "react";
import {Link} from "react-router-dom";

export default function ComponentsListItem ({name, img}) {
    return (
        <div className="col-3">
            <Link to="/create/:id" className="card bg-dark text-white">
                <img src={img} className="card-img" alt="Component" />
                <div className="card-img-overlay">
                    <p className='text-center h-100 d-flex align-items-end'>{name}</p>
                </div>
            </Link>
        </div>
    );
}