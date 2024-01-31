import React from 'react'

function BookCard({item}) {
    return (
        <div>
            <div className='books__card'>
                <img src={item.img} alt="" />
                <h3>{item.name}</h3>
                <p>{item.adibName}</p>
                <span>4.1   3100 ta fikrlar</span>
            </div>
        </div>
    )
}

export default BookCard
