'use client'
import { useState } from 'react'
import { tonListData } from './TonList.data'
import styles from './tonList.module.scss'

const Spoiler = ({ item }: { item: any }) => {
	const [isActive, setIsActive] = useState(false)
	return (
		<div
			className={`${styles.spoiler} rounded-[11.2px] pt-[6px] pb-[19px] pl-[16px] pr-[19px] flex gap-[10px] justify-between max-w-[700px] max-[1080px]:max-w-full max-[950px]:gap-[120px] max-[950px]:py-[10px] max-[950px]:cursor-pointer max-[400px]:gap-[25px]`}
			onClick={() => setIsActive(!isActive)}
		>
			<div className='flex items-center gap-[6px]'>
				<img src={item.img} alt='img' />
				<p className='font-semibold text-[14px] over'>{item.title}</p>
			</div>
			<p
				className={`text-[14px] leading-[24px] max-w-[450px] font-normal max-[1080px]:max-w-[720px] max-[950px]:absolute max-[950px]:top-0 max-[950px]:left-0 max-[950px]:right-0 max-[950px]:bottom-0 max-[950px]:bg-[#4649C1] max-[950px]:p-5 max-[950px]:rounded-b-[11.2px] max-[950px]:rounded-l-[11.2px] max-md:bg-[#23267d] max-md:overflow-auto ${
					isActive ? '' : 'max-[950px]:hidden'
				}`}
			>
				{item.text}
			</p>
			<img
				className={`hidden max-[950px]:block transition-all max-md:bg-[#23267d ${
					isActive
						? '-scale-y-[1] absolute -top-[35px] right-0 bg-[#4649C1] p-1 rounded-b-[11.2px] max-md:bg-[#23267d]'
						: 'scale-y-1'
				}`}
				src='/basicLotteryArrowBottom.svg'
				alt='Arrow'
			/>
		</div>
	)
}

export default () => {
	const tonList = tonListData.map((item, index) => (
		<Spoiler key={index} item={item} />
	))
	return (
		<div className={`${styles.wrapper} flex flex-col gap-[5px] relative`}>
			{tonList}
		</div>
	)
}
