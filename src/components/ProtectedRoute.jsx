import React, { useEffect } from 'react'
import { useAuth } from '../contexts/useAuth'
import { Navigate } from 'react-router-dom'
function  ProtectedRoute({allowedRoutes,children}) {
  
  const {user,loading}= useAuth()
  
  console.log(user)

  if(loading){
    return <div>Checking session...</div>
  }

  if(!user){
    return <Navigate to='/login' replace/>
  }

  if(allowedRoutes && !allowedRoutes.includes(user.Role)){
  return <Navigate to='/unauthorized' replace/>
  }

  return children

}

export default ProtectedRoute