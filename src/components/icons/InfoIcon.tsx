import Icon from '@ant-design/icons'

const InfoIcon = (props) => <Icon component={InfoSvg} {...props} />

export default InfoIcon

const InfoSvg = () => {
	return (
		<>
			<svg
				width='20'
				height='20'
				viewBox='0 0 20 20'
				fill='none'
				xmlns='http://www.w3.org/2000/svg'
			>
				<circle cx='10' cy='10' r='10' fill='#404852' />
				<rect
					x='8.39844'
					y='7.33472'
					width='2.59777'
					height='8.65923'
					rx='1.29888'
					fill='white'
				/>
				<circle cx='9.69732' cy='4.30426' r='1.29888' fill='white' />
			</svg>
		</>
	)
}
