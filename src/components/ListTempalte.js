import React  from 'react'

const ListTempalte = ({src,children}) => {
  return (
    <dl>
        {src.map(elem => (
            <React.Fragment>
                {children(elem)}
            </React.Fragment>
        ))}
    </dl>
  )
}

export default ListTempalte