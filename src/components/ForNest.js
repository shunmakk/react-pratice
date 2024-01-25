import React from 'react'
import ForItem from './ForItem'

const ForNest = ({src}) => {
  return (
    <dl>
        {src.map(elem => (
            <ForItem book={elem} key={elem.isbn}/>
        ))}
    </dl>
  )
}

export default ForNest;