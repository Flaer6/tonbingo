import Container from '@/components/layout/Container'
import TonList from '@/components/ui/lists/ton/TonList'

export default () => {
	return (
		<section>
			<Container>
				<div className='flex items-start justify-between text-sm gap-2 max-[1080px]:flex-col max-[1080px]:gap-4 max-[950px]:flex-row max-[950px]:items-end max-md:rounded-[10px] max-md:border max-md:border-solid max-md:border-[#9093FF] max-md:bg-[#494DC1] max-md:py-[25px] max-md:px-[10px] max-md:flex-col max-md:items-start'>
					<div className=''>
						<h3 className='text-[35px] font-Jost text-[#F2F2F2] leading-[35px] max-md:text-[28px]'>
							Блокчейн TON
						</h3>
						<p className='pt-[20px] pb-[29px] max-w-[254px] font-normal max-md:pb-[20px]'>
							Это не только новейшая технология, но и мощный инструмент для
							разработки игр на смарт-контрактах
						</p>
						<img className='w-full max-md:hidden' src='/ton.png' alt='img' />
						<img className='w-full md:hidden' src='/ton-mobile.png' alt='img' />
					</div>
					<TonList />
				</div>
			</Container>
		</section>
	)
}
