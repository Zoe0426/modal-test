import Image from 'next/image'
import { useModal } from '../context/modalContext';


export default function Home() {

	const { showModal } = useModal();
  return (
    <>
	<div className=' w-full flex justify-center items-center space-x-[20px] h-screen'>

	<div className=' w-[200px] rounded-lg bg-slate-700 text-white text-[24px] text-center'>

	<button className='' onClick={() => showModal('com1')}>註冊</button>
	</div>
<div className=' w-[200px] rounded-lg bg-slate-700 text-white text-[24px] text-center'>

	<button className='' onClick={() => showModal('com2')}>下載遊戲</button>
</div>
	</div>
	</>
  )
}
