import Link from 'next/link'
import Container from '../Container'
import { data } from '../header/menu.data'
import styles from './footer.module.scss'

export default () => {
	return (
		<footer className={`${styles.wrapper} pb-[67px]`}>
			<Container>
				<div
					className={`${styles.inner} rounded-[10px] border border-solid border-[#9093FF} bg-[#494DC1] pl-[54px] pt-[28px] pr-[150px] pb-[36px] flex items-center justify-between flex-wrap max-sm:pl-[21px] max-sm:pr-[21px] max-sm:pt-[25px] max-sm:pb-[29px]`}
				>
					<div className='flex flex-col'>
						<Link
							href='/'
							as='/'
							className='max-[480px]:leading-none flex item-center gap-[20px] max-sm:gap-[15px] max-[340px]:gap-0'
						>
							<img
								src='/logo.svg'
								className='max-sm:w-[68px] max-sm:h-[40px]'
								alt='logo'
							/>
							<div className='leading-none'>
								<p className={styles.logo} data-text='TONBINGO'>
									TONBINGO
								</p>
								<span className={styles.textLogo}>smart contr act lottery</span>
							</div>
						</Link>
						<p className='text-[10px] font-normal leading-[10px]'>
							&copy;{new Date().getFullYear()}
						</p>
					</div>
					<div className=''>
						<ul className='font-semibold'>
							{data.map((item, index) => (
								<li key={index} className={styles.link}>
									<Link href={item.link}>{item.name}</Link>
								</li>
							))}
							<li>
								<Link href='/setting' className={styles.link}>
									Настройки
								</Link>
							</li>
						</ul>
					</div>
					<div className={styles.social}>
						<div className='flex items-center gap-[7px]'>
							<a href='#' className={styles.link}>
								<img src='/telegram.svg' alt='Telegram' />
							</a>
							<a href='#' className={styles.link}>
								<img src='/youTube.svg' alt='YouTube' />
							</a>
						</div>
						<ul className='text-sm pt-[16px] flex flex-col gap-[10px]'>
							<li>
								<a href='#' className={styles.link}>
									Политика конфиденциальности
								</a>
							</li>
							<li>
								<a href='#' className={styles.link}>
									Договор публичной оферты
								</a>
							</li>
							<li>
								<a href='#' className={styles.link}>
									Пользовательское соглашение
								</a>
							</li>
						</ul>
					</div>
				</div>
			</Container>
		</footer>
	)
}
