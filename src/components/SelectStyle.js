import React from 'react'
import './SelectStyle .css'

const SelectStyle = ({mode}) => {
  return (
      //mode属性に応じてスタイルクラスを切り替え
    <div>
        <div className={`box ${mode === 'light' ? 'light' : 'dark'}`}>
            こんにちは！世界
        </div>
    </div>
  )
}

export default SelectStyle