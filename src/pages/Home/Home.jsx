import React, { useState } from 'react'
import Hero from '../../components/Hero/Hero'
import { Link, useParams,   } from 'react-router-dom'
import { adib } from '../../lib/adib'
import './Home.scss'

let cotegory = []
function Home() {
  const [render, setRender] = useState(true)
  let {type} = useParams()   //useLocation dan pathName ni olishni osson yoli
  console.log(type);
  console.log(adib.filter(k=>k.type===type))

  
  adib.forEach((item) => {
    if (!cotegory.includes(item.type) ) { // yoki (cotegory.includes(item.type) == false / shunaqa yozilsa ham bir xil iwledi
      cotegory.push(item.type)
    }
  })

  let locData = []
  if(window.localStorage.getItem('locData')) {
    locData = JSON.parse(window.localStorage.getItem('locData'))
  }
  function fnSetItem (id) {
    if(locData.find((i) => i.id == id )) {
      window.localStorage.setItem('locData', JSON.stringify(locData.filter((k) => k.id != id)))
      setRender(!render)
    }else {
      locData.push(adib.find((item) => item.id == id ))
      window.localStorage.setItem('locData', JSON.stringify(locData))
      setRender(!render)
    }
  }
  return (
    <div className='home'>
      <Hero/>
      <div className="container">
        <h2 className='home__title'>Asosiy kategoriyalar</h2>
        <ul className="home__nav">
        {
          cotegory.length > 1 && cotegory.map((item) => (
          <li key={item} className='home__nav--item'>
          <Link to={`/home/${item}`}>{item}</Link>
          </li>
        ))
        }    </ul>
        <ul className="home__list">
        {
          adib && type ? adib.filter(k=> k.type == type).map((item, index)=>(
            <li key={index} className="home__item">
              <Link to={`/author/${item.id}`}>
              <div className="home__card">
                <img src={item.img} alt="" />
                <div className="card__inner">
                <h3>{item.name}</h3>
                <p>{item.age}</p>
                <div >
                    <span><i className="bi bi-book-fill"></i> {item.book}</span>
                    <span><i className="bi bi-headphones"></i> {item.audio}</span>
                    <span><i onClick={() => fnSetItem(item.id)} className={locData.find(i => i.id ==item.id)? 'bi bi-heart-fill' : 'bi bi-heart' }></i></span>
                </div>
                </div>
              </div>
              </Link>
            </li>
          )): adib?.map((item, index)=>(
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
                        <span><i onClick={() => fnSetItem(item.id)} className={locData.find(i => i.id ==item.id)? 'bi bi-heart-fill' : 'bi bi-heart' }></i></span>
                    </div>
                    </div>
                  </div>
                </li>
          ))
        }
            </ul>  
      </div>
    </div>
  )
}

export default Home
