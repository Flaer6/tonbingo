import Container from '@/components/layout/Container'
import Button from '@/components/ui/buttons/Button'
import Link from 'next/link'
import styles from './style/screen1.module.scss'

export default () => {
	return (
		<section className={styles.screen1}>
			<div className='before:content-[url("/coin.png")] before:absolute before:bottom-[-120px] before:left-0'>
				<Container>
					<div className='flex items-center gap-[43px] max-md:flex-col max-md:items-start'>
						<div className='max-w-[255px] max-md:max-w-[100%] max-md:rounded-[10px] max-md:bg-[#494DC1] max-md:pt-[26px] max-md:pb-[38px] max-md:px-[10px] max-md:mt-[25px]'>
							<h1 className='text-[#F2F2F2] text-[50px] font-bold leading-[50px] font-Jost max-[480px]:text-[38px] max-[480px]:leading-[37px]'>
								100% честное лото
							</h1>
							<p className='my-[50px] max-md:my-[15px] max-md:max-w-[400px] max-md:leading-[23px] max-[480px]:text-[14px] max-[480px]:leading-[19px] max-[480px]:my-[25px]'>
								В алгоритмы TONBINGO был внедрён блокчейн TON, который
								обеспечивает надёжность и прозрачность результатов игры.
							</p>
							<div className={`${styles.video} hidden max-md:block`}>
								<div className="before:content-[url('/garland-2.png')] before:absolute before:-top-[5px] before:left-[115px] before:w-full max-[480px]:before:-left-[73px]">
									<Link href='/'>
										<img src='/video.png' alt='Video' />
									</Link>
								</div>
							</div>
							<div className='max-md:text-center'>
								<Button link='#' text='Играть' />
							</div>
							<span className='text-[#9093FF] text-[12px] font-medium leading-[18px] max-w-[212px] hidden max-md:block mt-[25px]'>
								Тони Лотт - Ваш навигатор в Мире приключений и развлечений!
							</span>
						</div>
						<div className={`${styles.video} max-md:hidden`}>
							<div className="before:content-[url('/garland-2.png')] before:absolute before:-top-[5px] before:left-[115px] before:w-full">
								<Link href='/'>
									<img src='/video.png' alt='Video' />
								</Link>
							</div>
						</div>
					</div>
					<span className='text-[#9093FF] text-[12px] font-medium leading-[18px] max-w-[212px] max-md:hidden'>
						Тони Лотт - Ваш навигатор в Мире приключений и развлечений!
					</span>
				</Container>
			</div>
		</section>
	)
}
