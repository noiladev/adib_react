import React from 'react'
import './AuDetail.scss'
import { Link, useParams } from 'react-router-dom'
import { adib } from '../../lib/adib'
import { books } from '../../lib/books'


function AuDetail() {
  let {id} = useParams()
  let adibFind = adib.find((item) => item.id == id)
  let bookFind = books.filter((item) => item.adibId == id)
  return (
     <section className='author'>
        <div className="container  author__inner">
          <div className="author__main">
            <img  className='author__img' src={adibFind.img} alt="" />
            <div className="author__date">
              <span>
                <p>Tavallud sanasi  -  Vafot etgan sanasi</p>
              </span>
              <div>
                <p>{adibFind.age}</p>
              </div>
              <span>
                <p>Tashkent uzb  -  Tashkent uzb</p>
              </span>
            </div>
          </div>
          <div className="author__info">
            <h2 className="author__title">{adibFind.name}</h2>
            <p className='author__des'>{adibFind.des}</p>
            <div className="author__box">
              
                 <div>
                 <i className="bi bi-bookmark-fill"></i>
                 <h3 className='plus__info'>Qo'shimcha ma'lumot:</h3>
                 </div>
                 <i>Adabiyot nazariyasi — adabiyotshunoslik fanining bir boʻlimi. Badiiy adabiyot, uning jamiyat hayotida tutgan oʻrni va ahamiyati, yaratilish qonuniyatlari, taraqqiyot yoʻllarini, badiiy asarning tasviriy hamda ifoda vositalari, tarkibiy qismlari, adabiy turlar va janrlarini oʻrganadi. Adabiyot nazariyasi badiiy soʻz sanʼatining ijodiy tajri-balariga asoslanib, oʻzining barcha na-zariy xulosalarini yaxlit bir davr yoki davrlarning badiiy soʻz mahsuli hamda ayrim badiiy asarlarining tahlilidan, tarixiy-adabiy jarayonni oʻrganishdan keltirib chiqaradi. Badiiy adabiyotni bevosita yaratuvchilarning adabiy ijod haqida aytgan fikrlari ham Adabiyot nazariyasi tomonidan eʼtiborga olinadi.</i>
              </div>
            
            <h3 className='author__poems'>Asarlar</h3>
            <ul className="author__list">
              {
                bookFind && bookFind.map((item) => (
                  <li className="author__item">
                    <Link to={`/book-detail/${item.id}`}>
                      <div className="author__card">
                        <img src={item.img} alt="" />
                        <h3>{item.name}</h3>
                        <p>4.1  3400 ta fikrlar</p>
                      </div>
                    </Link>
                  </li>
                ))
              }
            </ul>
          </div>

        </div>
     </section>
  )
}

export default AuDetail
