import Container from '@/components/layout/Container'
import {
	BasicLottery,
	SmartLottery,
} from '@/components/ui/spoilers/LotterySpoiler'
import styles from './style/screen2.module.scss'

export default () => {
	return (
		<section
			className={`${styles.wrapper} pt-[60px] pb-[100px] font-normal text-sm max-sm:pt-[45px] max-sm:pb-[20px]`}
		>
			<Container>
				<div
					className={`${styles.infoWrapper} flex justify-between items-start gap-3 max-md:flex-col max-md:gap-[40px]`}
				>
					<div
						className={`${styles.infoText} max-w-[201px] max-md:max-w-[560px]`}
					>
						<p>
							TONBINGO предлагает новый подход к организации и проведению
							лотерейных игр. Благодаря технологии блокчейн и смарт-контрактам
							мы вывели игру в лото на новую орбиту!
						</p>
					</div>
					<div
						className={`${styles.lottery} rounded-[12px] bg-[#494DC1] p-[20px] max-[1050px]:p-[10px] max-md:w-full max-sm:p-[10px]`}
					>
						<div className={styles.lotteryInner}>
							<h3 className='text-[#F2F2F2] font-Jost text-[35px] font-bold leading-[35px] mb-[25px] max-sm:text-[28px] max-sm:leading-[30px] max-sm:mb-[20px]'>
								Мировой рынок лото
							</h3>
							<p className='max-w-[468px] max-md:max-w-full'>
								<b>Лотерея</b> - самая популярная в мире
								социально-развлекательная игра.
								<b>Более 50% жителей</b> развитых стран постоянно играют в эту
								игру, а в отдельных странах этот показатель доходит до 80%.
								Прогнозируется, что при среднегодовом темпе роста в 6,4% к 2030
								году объем мирового рынка онлайн-лотерей достигнет{' '}
								<b>$ 8445,9 млн</b> по сравнению с $ 5444,7 млн в 2021 году.
							</p>
						</div>
					</div>
				</div>
				<div
					className={`${styles.lotteryWrapper} flex justify-between items-start gap-[40px] mt-[127px] max-[850px]:flex-col max-md:mt-[100px] max-sm:mt-[20px] max-sm:gap-[20px]`}
				>
					<div
						className={`${styles.basicLottery} border border-solid border-[#9093FF] bg-[#2E318F]`}
					>
						<h3
							className={`${styles.basicLotteryTitle} mb-[25px] max-w-[188px]`}
						>
							Обычные лотереи
						</h3>
						<div className={`${styles.spoilersWrapper}`}>
							<BasicLottery />
						</div>
					</div>
					<div className={`${styles.smartLottery}`}>
						<div className='max-w-[354px]'>
							<h3 className={`${styles.smartLotteryTitle} max-w-[294px]`}>
								Лотереи на смарт контрактах
							</h3>
							<p className='my-[20px]'>
								Это новый вид лотерейных игр, которые отличаются от обычных
								лотерей современным уровнем технологий и небывалой
								прозрачностью.
							</p>
						</div>
						<div className={styles.spoilersWrapper}>
							<SmartLottery />
						</div>
					</div>
				</div>
			</Container>
		</section>
	)
}
