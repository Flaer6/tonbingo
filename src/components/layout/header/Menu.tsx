import Image from 'next/image'
import Link from 'next/link'
import Language from './Language'
import styles from './header.module.scss'
import { data } from './menu.data'

export default () => {
	const menuList: React.JSX.Element[] = data.map((item, index) => (
		<li key={index}>
			<Link
				href={item.link}
				className='font-normal leading-[30px] transition-all hover:border-b-[2px] hover:border-solid hover:border-b-[#F46C20] hover:text-[#FCA034]'
			>
				{item.name}
			</Link>
		</li>
	))
	return (
		<nav className={styles.menu}>
			<ul className='flex items-center gap-[70px] py-[7px]'>{menuList}</ul>
			<Language />
			<Link href='/' className='py-[7px] px-[26px]'>
				<Image src='/Settings.png' alt='Settings' width={30} height={30} />
			</Link>
		</nav>
	)
}
