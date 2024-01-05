import styles from './button.module.scss'

export default ({ className }: { className?: string }) => {
	return (
		<button className={`${styles.buttonSoon} ${className}`} disabled>
			Coming soon
		</button>
	)
}
