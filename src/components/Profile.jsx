import React from 'react'
import { useState } from 'react';
import Collapse from 'react-bootstrap/Collapse';

function Profile() {

    const [open, setOpen] = useState(false);

  return (
    <div className='card shadow p-5'>
            <div className="d-flex justify-content-between">
                <h2>Profile</h2>
                <button onClick={() => setOpen(!open)} className='btn btn-outline-info'><i class="fa-solid fa-angle-down"></i></button>
            </div>
           <Collapse  in={open}>
                <div className=" row justify-content-center mt-4  ">
                    <label htmlFor="profile">
                        <input id='profile' type="file" style={{display:'none'}} />
                        <img width={'200px'} height={'200px'} src="https://www.freeiconspng.com/uploads/female-user-icon-clip-art--30.png" alt="no image" className='rounded-circle' />
                    </label>
                    <div className='mb-3 mt-5'>
                        <input type="text" placeholder='GitHub' className='form-control' />
                    </div>
                    <div className='mb-3 '>
                        <input type="text" placeholder='LinkedIn' className='form-control' />
                    </div>
                    <div className='mb-3 mt-3 '>
                        <button className='btn btn-success rounded w-100'>Update</button>
                    </div>
                </div>
           </Collapse>
    </div>
  )
}

export default Profile