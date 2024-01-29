import React from 'react'
import { useState } from 'react';

//画像が読み込めない場合にダミーを表示する

const EventError = ({ src,alt}) => {

    const [path, setPath] =useState(src);
    const handleError = () => setPath('../images/no-image2.png')

    return(
    <div>
        <img src={path}  alt={alt} onError={handleError}/>
    </div>
  )
}

export default EventError;