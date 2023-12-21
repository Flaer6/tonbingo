import { IButton } from '@/interfaces/interfaces'
import Link from 'next/link'
import styles from './button.module.scss'

export default ({ link, text, onClick }: IButton) => {
	return (
		<Link href={link} onClick={onClick} className={styles.button}>
			{text}
		</Link>
	)
}
