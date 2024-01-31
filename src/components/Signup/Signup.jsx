import React from 'react'
import '../Signin/Signin.scss'
import imgUp from '../../assets/img/signup.png'

function Signup({data}) {
  return (
    <div className='sign'>
       <div className="left">
        <img src={imgUp} alt="" />
       </div>
       <form className='right' action="#">
            <h2>Sign in</h2>
            <p>Do not you have an account? <button onClick={() => data.setSign(!data.sign)}>Sign up</button></p>
            <input type="text" placeholder='First name ' name='name1'/>
            <input type="text" placeholder='Last name' name='name2'/>
            <input type="text" placeholder='phone' name='phone'/>
            <input type="text" placeholder='email' name='email'/>
            <input type="text" placeholder='password' name='password'/>
            <button>Next step</button>
       </form>
    </div>
  )
}

export default Signup
