import React from 'react'
import './Search.scss'
function Search() {
  return (
    <div className='search container'>
      <h2 className='search__title'>Qidirish</h2>
      <form className='search__form' action="#">
        <input type="text" placeholder='adiblar, kitoblar, audiolar, maqolalar...' />
        <button className='btn btn-warning'><i className='bi bi-search'></i>Izlash</button>
      </form>
    </div>
  )
}

export default Search
