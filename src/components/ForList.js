import React from 'react'
import './Components.css'

const ForList = ({src}) => {
    

    //ソート関数を使って価格が低い順番に並べる　大きい順にしたいときは、n.price - m.priceにする
    src.sort((m, n) => m.price - n.price)
  return (
        <dl>
           {
               src.map(elem => (
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

export default ForList;