import Container from '@/components/layout/Container'
import GamesList from './GamesList'

export default () => {
	return (
		<section className='pt-[75px] pb-[100px] max-sm:pt-[59px] max-sm:pb-[40px]'>
			<Container>
				<h1 className='text-[#F2F2F2] font-bold text-[50px] leading-[50px] max-sm:text-[38px]'>
					Лото
				</h1>
				<GamesList />
			</Container>
		</section>
	)
}
