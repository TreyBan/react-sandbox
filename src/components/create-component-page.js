import React from "react";

export default function CreateComponentPage () {
    return (
        <div className='shadow rounded bg-dark p-4'>
            <div className="form-file mb-3">
                <input type="file" className="form-file-input" id="customFile" />
                    <label className="form-file-label" htmlFor="customFile">
                        <span className="form-file-text">Choose file...</span>
                        <span className="form-file-button">Browse</span>
                    </label>
            </div>
            <input className='form-control mb-3' placeholder='Component name' />
            <textarea className='form-control mb-3'
                      placeholder='Description'
                      style={{height: '150px'}}>

            </textarea>
            <textarea className='form-control mb-3'
                      placeholder='Code'
                      style={{height: '250px'}}>

            </textarea>
            <div className="text-center"><button className='btn btn-warning text-dark'>Add Component</button></div>
        </div>
    );
}