'use client'
import { useState } from 'react'
import styles from './lotterySpoiler.module.scss'
import { basicLotteryData, smartLotteryData } from './spoiler.data'

interface IProps {
	item: any
	background: string
	imgArrow: string
}

const Spoiler = ({ item, background, imgArrow }: IProps) => {
	const [isActive, setIsActive] = useState(false)
	const clicked = () => setIsActive(!isActive)
	const clickedStyle = isActive ? 'block' : 'hidden'

	return (
		<ul
			className={`${styles.wrapper} ${background} z-10 cursor-pointer`}
			onClick={clicked}
		>
			<li className={`${styles.spoilerOpen}`}>
				<div className={`${styles.spoilerOpenInner}`}>
					<img src={item.logo} alt='logo' />
					{item.title}
				</div>
				<img
					className={`transition-all ${
						isActive ? '-scale-y-[1]' : 'scale-y-1'
					}`}
					src={imgArrow}
					alt='Arrow'
				/>
			</li>
			<ul className={`${styles.spoilerText} ${clickedStyle} `}>
				<li className=''>{item.text}</li>
			</ul>
		</ul>
	)
}

export function BasicLottery() {
	const basicLotteryList = basicLotteryData.map((item, index) => (
		<Spoiler
			key={index}
			item={item}
			background='bg-[#23267D]'
			imgArrow='basicLotteryArrowBottom.svg'
		/>
	))
	return <>{basicLotteryList}</>
}

export function SmartLottery() {
	const smartLotteryList = smartLotteryData.map((item, index) => (
		<Spoiler
			key={index}
			item={item}
			background='bg-[#D24F06]'
			imgArrow='smartLotteryArrowBottom.svg'
		/>
	))
	return <>{smartLotteryList}</>
}
