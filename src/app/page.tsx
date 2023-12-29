import Screen1 from '@/components/screens/home/Screen1'
import Screen2 from '@/components/screens/home/Screen2'
import Screen3 from '@/components/screens/home/Screen3'
import Screen4 from '@/components/screens/home/Screen4'
import styles from './page.module.scss'

export default function Home() {
	return (
		<div className={styles.wrapper}>
			<Screen1 />
			<Screen2 />
			<Screen3 />
			<Screen4 />
		</div>
	)
}
