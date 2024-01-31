import React, { useState } from 'react'
import './Login.scss'
import Signin from '../../components/Signin/Signin'
import Signup from '../../components/Signup/Signup'

function Login() {
  const [sign, setSign] = useState(true)
  return (
    <div className='login'>
      {
        sign ? <Signin data={{sign, setSign}}/> : <Signup data={{sign, setSign}}/>
      }
    </div>
  )
}

export default Login
