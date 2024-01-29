import React, { useState } from 'react'
import './EventCompare.css'


const EventCompare = () => {
  
    const [result , setResult] = useState('');
  
    //mouseenter/mouseleaveイベント情報をresultに反映
    const handleIn = e => setResult(r => `${r}Enter :${e.target.id}<br/>`);
    const handleOut = e => setResult(r => `${r}Leave :${e.target.id}<br/>`);

  return (
    <div>
        <div id="outer" onMouseEnter={handleIn} onMouseLeave={handleOut}>
        {/* <div id="outer" onMouseOver={handleIn} onMouseOut={handleOut}> */}
            外(outer)
            <p id="inner">
            内(inner)
            </p>
        </div>
        <div dangerouslySetInnerHTML={{__html: result}}></div>
    </div>
  )
}

export default EventCompare