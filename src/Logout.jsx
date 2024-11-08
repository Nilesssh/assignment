import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import LogoutPhoto from "./assets/th.jpeg"
const Logout = () => {
  const navigate = useNavigate()
  const containerStyle = {
    display: 'flex',
    justifyContent: 'center', 
    alignItems: 'center',    
  };

  const imageStyle = {
    width: '30px', 
    height: '30px', 
    borderRadius: '50%',
  };
  return (
    
  
    
    <div  onClick={() => {
      const confirmBox = window.confirm(
        "Do you really want to logout?"
      )
      if (confirmBox === true) {
        navigate("/")
      }
    }} ><img src={LogoutPhoto} alt="Logout" className='logoutphoto'/></div>
  )
}

export default Logout