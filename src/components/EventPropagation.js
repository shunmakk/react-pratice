import React from 'react'
import './EventPropagation.css';

const EventPropagation = () => {

    //イベント処理はイベントの発生元だけで実行されるわけではない。　バブリングフェーズ→キャプチャフェーズ→ターゲットフェーズ
  
    const handleParent = () => alert('#parent run...');
    const handleMy = () => alert('#my run');
    const handleChild = e => {
        // e.stopPropagation();  伝播を抑制する
        // e.preventDefault();  イベント既定の動作をキャンセルする
        alert('#child run');
    };

  return (
    <div id="parent" onClick={handleParent}>
        親要素
        <div id="my" onClick={handleMy}>
            現在要素
            <a id="child" href='https://wings.msn.to' onClick={handleChild}>
              小要素
            </a>
        </div>
    </div>
  )
}

export default EventPropagation