import React, { useEffect, useState } from 'react'
import Header from '../components/Header'
import { Col, Row } from 'react-bootstrap'
import ProjectCard from '../components/ProjectCard'
import { allprojectAPI } from '../services/allAPI'
import { Link } from 'react-router-dom'

function Project() {

  const [allProject,setAllProject]= useState([])
  const [searchKey,setSearchKey] = useState("")
  const [isToken , setIsToken]= useState(false)

  const getAllProject = async()=>{

    if(sessionStorage.getItem("token")){
      const token = sessionStorage.getItem("token")

      const reqHeader = {
        "Content-Type": "application/json",
        "Authorization": `Bearer ${token}`
      }
    const result = await allprojectAPI(searchKey,reqHeader)
    console.log(result);
    if(result.status === 200){
        setAllProject(result.data)
    }
    else{
      console.log(result.response.data);
    }

    }
  }
  console.log(allProject);
  console.log(searchKey);

  useEffect(()=>{
    getAllProject()
  },[searchKey])

  useEffect(()=>{
   if(sessionStorage.getItem("token")){
    setIsToken(true)
   }
  },[])
  return (
    <>
      <Header/>

      <div className="text-center " style={{marginTop:'100px'}}>
          <h1>All Project</h1>
          <div className="d-flex justify-content-center align-items-center">
            <div className="d-flex mt-5 w-25">
              <input type="text" value={searchKey} onChange={(e)=>setSearchKey(e.target.value)} className='form-control' placeholder='Search using Technologies' />
              <i class="fa-solid fa-magnifying-glass fa-rotate-90" style={{marginLeft:'-40px', color:'lightgrey'}}></i>
            </div>
          </div>
      </div>
      <Row className='container-fluid mb-5 mt-5'>
       {allProject?.length>0? 
       allProject?.map((item)=>(<Col className='mb-5' sm={12} md={6} lg={4}>
        <ProjectCard project ={item}/> 
       </Col>))
       :<div>

         {isToken?<p className='text-center fs-3 text-danger'>Sorry no such project Currently Available</p>:
          <div className='d-flex justify-content-center align-items-center flex-column'>
          <img src="https://cdn.pixabay.com/animation/2023/06/13/15/12/15-12-30-710_512.gif" alt=" no image"  height={'200px'} width={'200px'}/>
          <p className='fs-3 mt-4 text-danger'>Please<Link style={{textDecoration:'none', color:'blue'}} to={'/login'}> login </Link>to see more Project</p>
         </div>}
       </div>
        }
      </Row>
    </>
  )
}

export default Project