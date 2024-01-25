import React from 'react'


const ForItem = ({book}) => {
  return (
    <>
    <dt>
    <a href={`https://wings.msn.to/books/${book.isbn}/${book.isbn}.jpg`} >
     {book.title}({book.price})
    </a>
    </dt>
    <dl>{book.summary}</dl>
    </>
  )
}

export default ForItem;