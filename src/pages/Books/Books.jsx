import React from 'react'
import './Books.scss'
import { books } from '../../lib/books'
import { Link } from 'react-router-dom'
import BookCard from '../../components/BookCard/BookCard'
function Books() {

  return (
     <section className='books'>
        <div className="container books__inner">
            <ul className="books__list">
                {
                    books && books.map((item, index) => (
                    <li   key={index} className='books__item'>
                       <Link to={`/books-detail/${item.id}`} >
                       <BookCard item={item}/>
                       </Link>
                    </li>
                    ))
                }
            </ul>
        </div>
     </section>
  )
}

export default Books
