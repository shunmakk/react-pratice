import React from 'react'

//このcomponentの親要素はStateParent.js

const StateCounter = ({step , onUpdate}) => {

    const handleClick2 = () => onUpdate(step);

  return (
    <div>
        <button onClick={handleClick2}>
            <span>{step}</span>
        </button>
    </div>
  )
}

export default StateCounter