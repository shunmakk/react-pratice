import React from 'react'

const EventKey = () => {

  const handlekey = e =>{
      //ctrl + q でヘルプメッセージを表示
      if(e.optionkey && e.key ===  'q')
      alert('名前は20文字以内で入力してください');
  }

  return (
    <div>
    <form>
        <label>
            名前:
            <input type="text" size="20" onKeyDown={handlekey}/>
        </label>
    </form>
    </div>
  )
}

export default EventKey;