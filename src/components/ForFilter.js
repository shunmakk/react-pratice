import React from 'react'

const ForFilter = ({src}) => {


    //リストを絞り込むfilterメソッド
    const lowPrice = src.filter(book => book.price < 2800);

  return (
    <dl>
    {lowPrice.map(elem => (
            //mapメソッドを使った時は、key属性が必要
            <React.Fragment key={elem.isbn} className='mapinner'>
            <dt>
             <a href={`https://wings.msn.to/books/${elem.isbn}/${elem.isbn}.jpg`} className='mapaline'>
              {elem.title}({elem.price})
             </a>
            </dt>
            <dl>{elem.summary}</dl>
            </React.Fragment>
        ))
    }
 </dl>
  )
}

export default ForFilter