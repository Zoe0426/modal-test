import React from 'react'
// Context
import { useModal } from '../context/modalContext';

export default function Com3() {

      // Modal context
      const { showModal } = useModal();
  return (<>
    <h1>隱私權政策</h1>
    <button className=' bg-yellow-400' onClick={() => showModal('com1')}>回註冊</button>
  </>
  )
}
