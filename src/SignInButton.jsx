import React, { useEffect } from 'react'

const SignInButton = ({onClickLoginBtn}) => {
  
  return (
    <div><button onClick={onClickLoginBtn}>SignIn</button></div>
  )
}

export default SignInButton