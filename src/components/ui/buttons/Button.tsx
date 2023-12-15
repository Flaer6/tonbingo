import Link from 'next/link'
import { FunctionComponent } from 'react'
import styles from './button.module.scss'

interface IButton {
	link: string
	text: React.ReactNode
	onClick?: FunctionComponent
}
export default ({ link, text, onClick }: IButton) => {
	return (
		<Link href={link} onClick={onClick} className={styles.button}>
			{text}
		</Link>
	)
}
