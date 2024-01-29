import React from 'react'

const EventObj = () => {

 const handleClick = e => console.log(e);

  return (
    <div>
        <button onClick={handleClick}>クリック</button>
    </div>
  )
}

export default EventObj