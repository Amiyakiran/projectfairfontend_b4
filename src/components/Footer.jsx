import React from 'react'
import {Link} from 'react-router-dom'

function Footer() {
  return (

    <div style={{height:'300px'}} className=' bg-success d-flex justify-content-center align-items-center w-100 flex-column'>
      <div className='d-flex justify-content-evenly align-items-center w-100'>
       <div className="websites" style={{width:'400px'}}>
       <h4 className='mb-3 text-light'>
       <i class="fa-brands fa-stack-overflow fa-2x"></i>
            Project Fair
       </h4>
       <h6>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Impedit velit placeat quasi animi maxime natus vero aspernat blanditiis magni, molestias</h6>
       <h6>similique? Nesciunt, aspernatur?</h6>
       </div>
       <div className="links d-flex flex-column">
        <h4 className='mb-3 text-light'>Links</h4>
        <Link to={'/'} style={{textDecoration:'none', color:'black'}}>Home Page</Link>
        <Link to={'/login'} style={{textDecoration:'none', color:'black'}}>Login Page</Link>

        <Link to={'/register'} style={{textDecoration:'none', color:'black'}}>Register Page</Link>

       </div>
       <div className="guides  d-flex flex-column">
       <h4 className='mb-3 text-light'>Guides</h4>
        <Link to={'https://bootswatch.com/'} style={{textDecoration:'none', color:'black'}}>React</Link>
        <Link to={'https://react-bootstrap.github.io/'} style={{textDecoration:'none', color:'black'}}>React Bootstrap</Link>

        <Link to={'https://bootswatch.com/'} style={{textDecoration:'none', color:'black'}}>Bootswatch</Link>
       </div>
       <div className="contacts d-flex flex-column">
        <h4 className='mb-3 text-light'>Contact Us</h4>
        <div className='d-flex mb-2'>
          <input type="text" className='form-control' placeholder='Enter your Email ID' />
          <button className='btn btn-warning ms-2'>Subscribe</button>
        </div>
        <div className='d-flex justify-content-evenly align-items-center'>
        <Link to={'/'} style={{textDecoration:'none', color:'white'}}><i class="fa-brands fa-instagram fa-2x"></i></Link>
        <Link to={'/home'} style={{textDecoration:'none', color:'white'}}><i class="fa-brands fa-twitter fa-2x"></i></Link>

        <Link to={'/watch-history'} style={{textDecoration:'none', color:'white'}}><i class="fa-brands fa-linkedin fa-2x"></i></Link>
        <Link to={'/watch-history'} style={{textDecoration:'none', color:'white'}}><i class="fa-brands fa-facebook fa-2x"></i></Link>

        </div>
       </div>
      </div>
      <p className='mt-5'>Copyright © 2023 Project Fair. Built with React.</p>

    </div>
  )
}

export default Footer