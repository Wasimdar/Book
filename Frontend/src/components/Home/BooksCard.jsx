import React from 'react'

import BookSingleCart from './BookSingleCart';

function BooksCard({ books }) {
    return (
        <div className='grid sn:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4' >
            {books.map((item) => (
              <BookSingleCart 
              key={item._id}
              book={item} />
            ))}
        </div>
    )
}

export default BooksCard;