import React from 'react'
import './Signin.scss'
import imgIn from '../../assets/img/login.png'
import { useNavigate } from 'react-router-dom';


const UserArray =
{
  password: 1,
  email: 'abc'
}


function Signin({ data }) {
  const navigate = useNavigate();
  function fnIn(event) {
    event.preventDefault()
    const email = event.target.email.value
    const password = event.target.password.value

    if (UserArray.email == email && UserArray.password == password) {
      navigate('/home')
      window.localStorage.setItem('token', 'abcd')
    } else {
      navigate('/')
    }
  }

  return (
    <div className='sign'>
      <div className="left">
        <img src={imgIn} alt="" />
      </div>
      <form className='right' onSubmit={(event) => fnIn(event)} action="#">
        <h2>Sign In</h2>
        <p>Do not you have an account? <button onClick={() => data.setSign(!data.sign)}>Sign up</button></p>
        <input type="text" placeholder='Email' name='email' />
        <input type="text" placeholder='password' name='password' />
        <button type='submit'>Next step</button>
      </form>
    </div>
  )

}
export default Signin
