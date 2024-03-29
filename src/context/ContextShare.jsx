import React from 'react'
import { useState } from 'react'
import { createContext } from 'react'

export const addProjectResponseContext = createContext()
export const editProjectResponseContext = createContext()
export const isAuthTokenContext = createContext()

function ContextShare({children}) {
  //chidren is a predefined props used to share data between all components
  //data to share
    const [addProjectResponse,setAddProjectResponse] = useState({})

    const [editProjectResponse,setEditProjectResponse] = useState({})

    const [isAuthToken,setIsAuthToken]= useState(true)
    
  return (

    <>
    {/* provider - provide the data to the components
    children - provide data to every component
    value = data to be provided */}
     <addProjectResponseContext.Provider value={{addProjectResponse,setAddProjectResponse}}>
        <editProjectResponseContext.Provider value={{editProjectResponse,setEditProjectResponse}}> 
        <isAuthTokenContext.Provider value={{isAuthToken,setIsAuthToken}}>
          {children}
          </isAuthTokenContext.Provider>
        </editProjectResponseContext.Provider>
      </addProjectResponseContext.Provider>
    
    </>
  )
}

export default ContextShare