'use client'
import { useState } from 'react'
import styles from './header.module.scss'

export default () => {
	const [active, setActive] = useState(false)
	return (
		<ul className='relative z-10'>
			<button
				className={`${styles.lang} ${active ? 'bg-[#8b8fff]' : ''}`}
				onClick={() => setActive(!active)}
			>
				RU
			</button>
			<ul
				className={`absolute top-[60px] right-[-8px] border-[0.3px] border-solid border-[#8B8FFF] bg-[#393DA7] rounded-[3px] transition-all max-lg:top-[40px] max-lg:-right-[49px] ${
					active ? 'scale-y-[100%]' : 'scale-y-0'
				}`}
				onClick={() => setActive(!active)}
			>
				<li className='hover:rounded-[2px] hover:bg-[#8B8FFF]'>
					<button className='py-[6px] px-[15px]'>Русский</button>
				</li>
				<li className='hover:rounded-[2px] hover:bg-[#8B8FFF] '>
					<button className='py-[6px] px-[15px]'>Русский</button>
				</li>
				<li className='hover:rounded-[2px] hover:bg-[#8B8FFF]'>
					<button className='py-[6px] px-[15px]'>Русский</button>
				</li>
			</ul>
		</ul>
	)
}
