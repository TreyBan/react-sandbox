import React from "react";
import {Link} from "react-router-dom";

export default function ComponentsListItem ({name, img}) {
    return (
        <div className="col-3">
            <Link to="/show/:id" className="card list-item">
                <img src={img} className="card-img" alt={name} />

                <div className="card-img-overlay d-flex align-items-end">
                    <div className="item-text-background">
                        <span>{name}</span>
                    </div>
                </div>
            </Link>
        </div>
    );
}