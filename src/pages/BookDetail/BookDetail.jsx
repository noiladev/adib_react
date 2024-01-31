import React from 'react'
import './BookDetail.scss'
import { useParams } from 'react-router-dom'
import { books } from '../../lib/books'

function BookDetail() {
  const {id} = useParams()
  let findItem = books.find((item) => item.id == id)
  return (
    <section className='book'>
      <div className="container book__inner">
        <div className="book__top">
          <img src={findItem.img} alt="" />
          <div className="book__info">
            <h2>{findItem.name}</h2>
            <p className='book__subtitle'>{findItem.adibName}</p>
            <span>Sahifalar soni <p>{findItem.pageCount}</p></span>
            <span>Chop etilgan : <p>{findItem.year}</p></span>
            <span>Janri :<p>{findItem.type}</p></span>
            <span>Nashriyot <p>{findItem.nashriyot}</p></span>
            <div className="line">
              <p>To'liq Ma'lumot</p>  <hr />
            </div>
            <div className="book__des">{findItem.des}</div>
            <p className="format__title">Mavjud Ma'lumotlar</p>
            <div className="book__format">
              <div>
              <i className="bi bi-book-fill"></i>
                <h3>Qog'oz kitob</h3>
                <span>{findItem.price} so'm</span>
              </div>
              <div>
                <i className="bi bi-headphones"></i>
                <h3>Audio kitob</h3>
                <span>27:37:00</span>
              </div>
              <div>
                <i className="bi bi-phone-fill"></i>
                <h3>elektron kitob</h3>
                <span>pdf, eBook</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default BookDetail
