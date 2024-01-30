import React, { useState } from 'react'

const EventOnce = () => {
  
     //イベントハンドラーを初回のみ実行する

     //クリック済みかどうかを管理するためのフラグ
     const [clicked, setClicked] = useState(false);
     //今日の運勢　（点数）
     const [result, setResult] =useState('-');

     const handleClick = e => {
         //未クリックの場合のみ運勢を算出
         if(!clicked){
             setResult(Math.floor(Math.random() * 100 + 1));

             //フラグを反転
             setClicked(true);
         }
     }


  return (
    <div>
        <button onClick={handleClick}>結果表示</button>
        <p>本日の占いは{result}点です。</p>
    </div>
  )
}

export default EventOnce