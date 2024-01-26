import React from 'react'
import { useState } from 'react';

const EventMouse = ({beforeSrc, afterSrc , alt}) => {


   const [current, setCurrent] = useState(beforeSrc);

   const handleEnter = () => setCurrent(afterSrc);
   const handleLeave = () => setCurrent(beforeSrc);

  return (
    <div>
     <img src={current} alt={alt}  onMouseEnter={handleEnter} onMouseLeave={handleLeave} />
    </div>
  )
}

export default EventMouse