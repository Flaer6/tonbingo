import Screen1 from '@/components/screen/home/Screen1'
import Screen2 from '@/components/screen/home/Screen2'
import styles from './page.module.scss'

export default function Home() {
	return (
		<>
			<div className={styles.wrapper}>
				<Screen1 />
				<Screen2 />
			</div>
		</>
	)
}
