'use client'
import Image from 'next/image'
import Link from 'next/link'
import { useState } from 'react'
import Burger from './Burger'
import Language from './Language'
import { data } from './menu.data'

export default () => {
	const [isActive, setIsActive] = useState(false)
	const menuList: React.JSX.Element[] = data.map((item, index) => (
		<li key={index}>
			<Link
				href={item.link}
				className='font-normal leading-[30px] transition-all py-[6px] px-[15px] hover:rounded-[2px] hover:bg-[#8B8FFF] hover:text-[17px] block'
			>
				{item.name}
			</Link>
		</li>
	))
	return (
		<nav className='lg:hidden'>
			<div className='rounded-[4px] border border-solid border-[#6F72D0] bg-[#2E318F] flex items-center relative'>
				<Language />
				<Burger click={() => setIsActive(!isActive)} active={isActive} />
				<ul
					className={`absolute top-[40px] -left-[2px]  border-[0.3px] border-solid border-[#8B8FFF] bg-[#393DA7] rounded-[3px] transition-all z-20 origin-top ${
						isActive ? 'scale-y-[1]' : 'scale-y-0'
					}`}
					onClick={() => setIsActive(false)}
				>
					{menuList}
					<Link href='/' className='flex flex-col items-center  '>
						<Image
							src='/Settings.png'
							alt='Settings'
							width={30}
							height={30}
							className='transition-all hover:rotate-180 block'
						/>
					</Link>
				</ul>
			</div>
		</nav>
	)
}
