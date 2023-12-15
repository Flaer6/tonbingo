interface IMenu {
	click: () => void
	active: boolean
}

export default ({ click, active }: IMenu) => {
	return (
		<>
			<button
				className='w-[45px] h-[32px] rounded-[4px] relative z-10 '
				style={{
					background:
						'linear-gradient(269deg, #FCA034 -26.63%, #F46C20 45.59%)',
				}}
				onClick={click}
			>
				<span
					className={`absolute bg-[#F2F2F2] h-[1.5px] w-[20px] left-[12px] top-[11px] transition-all ${
						active ? 'scale-x-0' : 'scale-x-[100%]'
					}`}
				></span>
				<span
					className={`absolute bg-[#F2F2F2] h-[1.5px] w-[20px] left-[12px] top-[15.25px] transition-all ${
						active ? 'rotate-45' : 'rotate-0'
					}`}
				></span>
				<span
					className={`absolute bg-[#F2F2F2] h-[1.5px] w-[20px] left-[12px] top-[15.25px] transition-all ${
						active ? '-rotate-45' : 'rotate-0'
					}`}
				></span>
				<span
					className={`absolute bg-[#F2F2F2] h-[1.5px] w-[20px] left-[12px] top-[19.45px] ${
						active ? 'scale-x-0' : 'scale-x-[100%]'
					}`}
				></span>
			</button>
		</>
	)
}
