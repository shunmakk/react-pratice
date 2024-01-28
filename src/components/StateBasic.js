
import React, { useState } from 'react'

const StateBasic = ({init}) => {
   
    const [count,setCount] = useState(init);

    const handleClick = () => setCount(count + 1);

  return (
    <div>
        <button onClick={handleClick}>カウント</button>
        <p>{count}回クリックされました。</p>
    </div>
  )
}

export default StateBasic;