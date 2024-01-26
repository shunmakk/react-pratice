import React, { useState } from 'react'
import StateCounter from './StateCounter'

const StateParent = () => {
    

    const [count2,setCount2] = useState(0);

    const update = step =>  setCount2(c => c + step)


  return (
    <div>
        <p>総カウント： {count2}</p>
        <StateCounter step={1} onUpdate={update} />
        <StateCounter step={5} onUpdate={update} />
        <StateCounter step={-2} onUpdate={update} />
    </div>
  )
}

export default StateParent