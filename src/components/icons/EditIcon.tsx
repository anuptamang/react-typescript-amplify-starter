import Icon from '@ant-design/icons'

const EditIcon = (props) => <Icon component={EditSvg} {...props} />

export default EditIcon

const EditSvg = () => {
	return (
		<>
			<svg
				width='12'
				height='15'
				viewBox='0 0 12 15'
				fill='none'
				xmlns='http://www.w3.org/2000/svg'
			>
				<path
					d='M10.6926 4.31996C10.9612 4.05003 11.109 3.69156 11.109 3.31024C11.109 2.92891 10.9612 2.57044 10.6926 2.30051L9.56539 1.16797C9.29674 0.898042 8.93997 0.749512 8.56045 0.749512C8.18094 0.749512 7.82416 0.898042 7.55622 1.16725L0 8.73589V11.8886H3.13635L10.6926 4.31996ZM8.56045 2.17769L9.68834 3.30952L8.55832 4.44064L7.43114 3.30881L8.56045 2.17769ZM1.42141 10.4604V9.32858L6.42478 4.3171L7.55196 5.44965L2.5493 10.4604H1.42141ZM0 13.3168H11.3713V14.745H0V13.3168Z'
					fill='#636770'
				/>
			</svg>
		</>
	)
}
