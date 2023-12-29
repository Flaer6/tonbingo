import Container from '@/components/layout/Container'
import styles from './style/screen4.module.scss'

export default () => {
	return (
		<section
			className={`${styles.wrapper} py-[100px] max-sm:pt-[90px] max-sm:pb-[60px]`}
		>
			<Container>
				<div className='flex items-center gap-[130px] max-md:flex-col max-md:gap-[45px]'>
					<div className={styles.image}>
						<img src='/lottery_machine_2.png' alt='img' />
					</div>
					<div className='max-w-[362px]'>
						<p className='max-sm:text-sm'>
							Вместе с TON мы выводим игры на новый уровень и открываем для
							игроков удивительный новый мир блокчейн игр!
						</p>
						<h3 className='font-Jost text-[35px] font-bold leading-[35px] mt-[48px] mb-[41px] max-sm:text-[28px] max-sm:leading-[30px] max-sm:mt-[25px] max-sm:mb-[20px]'>
							Играй в TONBINGO и получай максимум удовольствия!
						</h3>
						<button className={styles.button}>Зарегистрироваться</button>
					</div>
				</div>
			</Container>
		</section>
	)
}
