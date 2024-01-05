export interface ILotteryData {
	logo: string
	title: string
	text: string
}

export interface IDataMenu {
	name: string
	link: string
}

export interface IButton {
	link: string
	text: React.ReactNode
	onClick?: () => void
}
export interface ITonList {
	img: string
	title: string
	text: string
}
export interface IGames {
	img: string
	moreLink: string
	gameLink: string
	type: boolean
	title?: string
}
