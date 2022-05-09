import Icon from '@ant-design/icons'

const EventIcon = (props) => <Icon component={EventSvg} {...props} />

export default EventIcon

const EventSvg = () => {
	return (
		<>
			<svg
				width='22'
				height='21'
				viewBox='0 0 22 21'
				fill='none'
				xmlns='http://www.w3.org/2000/svg'
			>
				<path
					d='M15.6906 5.66973V15.3398M10.8556 9.296V15.3398M6.02056 12.9223V15.3398M3.60306 20.1748H18.1081C18.7493 20.1748 19.3642 19.9201 19.8175 19.4667C20.2709 19.0133 20.5256 18.3984 20.5256 17.7573V3.25223C20.5256 2.61106 20.2709 1.99616 19.8175 1.54279C19.3642 1.08942 18.7493 0.834717 18.1081 0.834717H3.60306C2.96189 0.834717 2.34699 1.08942 1.89362 1.54279C1.44025 1.99616 1.18555 2.61106 1.18555 3.25223V17.7573C1.18555 18.3984 1.44025 19.0133 1.89362 19.4667C2.34699 19.9201 2.96189 20.1748 3.60306 20.1748Z'
					stroke='white'
					strokeLinecap='round'
					strokeLinejoin='round'
				/>
			</svg>
		</>
	)
}
