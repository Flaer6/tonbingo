'use client'

import Button from '@/components/ui/buttons/Button'
import ButtonSoon from '@/components/ui/buttons/ButtonSoon'
import { useInView } from 'react-intersection-observer'
import { gamesList } from './games.data'
import styles from './games.module.scss'

export default () => {
	return (
		<div className='pt-[30px] grid grid-cols-4 gap-[20px] max-[1050px]:grid-cols-3 max-[795px]:grid-cols-2 max-[360px]:grid-cols-1'>
			{gamesList.map((item, index) => {
				const [ref, inView] = useInView({
					threshold: 0.2,
				})
				return (
					<div
						key={index}
						ref={ref}
						className={`${styles.game} ${inView ? 'animate' : 'opacity-0'}`}
					>
						<div className=''>
							{item.type ? (
								<img className='w-full' src={item.img} alt='img' />
							) : (
								<div
									className={`w-full h-[175px] rounded-[10px] bg-[#F28F1F] relative before:content-['Soon'] before:absolute before:bottom-0 before:right-[40%] before:text-[#F2F2F2] before:font-Dragon before:text-[26px] before:font-normal before:z-10`}
								></div>
							)}
						</div>
						<div className='p-[18px] max-sm:p-[10px]'>
							<div className='flex justify-between g-[10px] items-center mb-[30px] max-sm:mb-[17px]'>
								<p className='text-[17.5px] text-[#8B8FFF] max-sm:text-[10px]'>
									Подробнее
								</p>
								<img src='/arrow-right.svg' alt='arrow' />
							</div>
							{item.type ? (
								<Button link={item.gameLink} text='Играть' />
							) : (
								<ButtonSoon />
							)}
						</div>
					</div>
				)
			})}
		</div>
	)
}
