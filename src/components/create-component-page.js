import React from "react";

export default function CreateComponentPage () {
    return (
        <div className='shadow rounded bg-dark p-4'>
            <input type="file" className='form-control mb-3' placeholder='Image' />
            <input className='form-control mb-3' placeholder='Component name' />
            <input className='form-control mb-3' placeholder='Description' />
            <textarea className='form-control mb-3'
                      placeholder='Code'
                      style={{height: '250px'}}>

            </textarea>
            <button className='btn btn-success'>Add Component</button>
        </div>
    );
}