import React, { useState } from 'react'
import './Profile.scss'
import avatar from '../../assets/img/profileAvatar.png'
import { Link } from 'react-router-dom'

function Profile() {
  const [action, setAction ] = useState(window.localStorage.getItem('action' || 'book'))
  const [data, setData ] = useState(JSON.parse(window.localStorage.getItem('locDAta' || []  )))
  function fnSetAction (value) {
    window.localStorage.setItem('action', value)
    setAction(value)
  }
  return (
    <section className='prfile'>
      <div className="container">
        <div className="profile__inner">
            <div className='profile__user'>
                <img src={avatar} alt="" className="profile__avatar" />
                <p>Oltin kitobxon</p>
                <span>186 ta kitob o'qigan</span>
            </div> 
            <div className="profile__info">
                <h3>Farruxbek Abdullayev</h3>
                <p>Tavallud: <span>February 08, 1999</span></p>
                <p>manzil: <span>Jizzax</span></p>
                <p>Bio:  <span>Graphic designer and Developer</span></p>
            </div>

        </div>
        <ul className="profile__nav">
          <li>
            <button className={action == 'book' ? 'active' : null} onClick={() => fnSetAction('book')}>Kitoblar</button>
          </li>
          <li>
            <button className={action == 'adib' ? 'active' : null} onClick={() => fnSetAction('adib')}>Adiblar</button>
          </li>
        </ul>
        <ul className="profile__list">
        {
                    data && data.map((item, index) => (
                      <li key={index} className="home__item">
                      <div className="home__card">
                        <img src={item.img} alt="" />
                        <div className="card__inner">
                      <Link to={`/author/${item.id}`}>
                        <h3>{item.name}</h3>
                      </Link>
                        <p>{item.age}</p>
                        <div >
                            <span><i className="bi bi-book-fill"></i> {item.book}</span>
                            <span><i className="bi bi-headphones"></i> {item.audio}</span>
                        </div>
                        </div>
                      </div>
                    </li>
                    ))
                }
        </ul>
      </div>
    </section>
  )
}

export default Profile
