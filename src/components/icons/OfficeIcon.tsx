import Icon from '@ant-design/icons'

const OfficeIcon = (props) => <Icon component={OfficeSvg} {...props} />

export default OfficeIcon

const OfficeSvg = () => {
	return (
		<>
			<svg
				version='1.1'
				xmlns='http://www.w3.org/2000/svg'
				width='21'
				height='21'
				viewBox='0 0 640 640'
			>
				<path
					fill='#fff'
					d='M544 384h-192v128h32v128h-128v-128h32v-128h-192v128h32v128h-128v-128h32v-128c0-35.346 28.654-64 64-64v0h192v-128h-64v-192h192v192h-64v128h192c35.346 0 64 28.654 64 64v0 128h32v128h-128v-128h32v-128z'
				></path>
			</svg>
		</>
	)
}
