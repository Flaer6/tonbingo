import Link from 'next/link'
import Container from '../Container'
import Menu from './Menu'
import MobileMenu from './MobileMenu'
import styles from './header.module.scss'

export default () => {
	return (
		<header className={`${styles.header} pt-[27px] z-10 max-md:pt-[20px]`}>
			<Container>
				<div className='flex items-center justify-between gap-3'>
					<Link href='/' as='/' className='max-[480px]:leading-none'>
						<p className={styles.logo} data-text='TONBINGO'>
							TONBINGO
						</p>
						<span className={styles.textLogo}> smart contr act lottery</span>
					</Link>
					<Menu />
					<MobileMenu />
				</div>
			</Container>
		</header>
	)
}
