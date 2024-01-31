import React from 'react'
import './Header.scss'
import { Link } from 'react-router-dom'
import logo from '../../assets/img/logo.svg'
import avatar from  '../../assets/img/avatar.png'

function Header() {
  return (
     <header>
        <div className="container">
          <nav>
            <Link className='nav__logo' to='/profile'>
              <img src={logo} alt="" />
            </Link>
            <ul className="nav__list">
              <li className="nav__item">
                <Link to='/home' className='nav__link'>Bosh sahifa</Link>
              </li>
              <li className="nav__item">
                <Link to='/books' className='nav__link'>Kitoblar </Link>
              </li>
              <li className="nav__item">
                <Link to='/nazm' className='nav__link'>Nazm</Link>
              </li>
              <li className="nav__item">
                <Link to='/maqolalar' className='nav__link'>Maqolalar</Link>
              </li>
              <li className="nav__item">
                <Link to='/forum' className='nav__link'>Forum</Link>
              </li>
            </ul>
            <Link to='/profile'>
              <img src={avatar} alt="" />
            </Link>
          </nav>
        </div>
     </header>
  )
}

export default Header
