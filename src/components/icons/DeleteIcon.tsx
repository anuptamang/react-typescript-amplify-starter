import Icon from '@ant-design/icons'

const DeleteIcon = (props) => <Icon component={DeleteSvg} {...props} />

export default DeleteIcon

const DeleteSvg = () => {
	return (
		<>
			<svg
				width='17'
				height='17'
				viewBox='0 0 17 17'
				fill='none'
				xmlns='http://www.w3.org/2000/svg'
			>
				<path
					d='M6.23242 6.23242H7.27115V12.4648H6.23242V6.23242Z'
					fill='#636770'
				/>
				<path
					d='M9.34766 6.23242H10.3864V12.4648H9.34766V6.23242Z'
					fill='#636770'
				/>
				<path
					d='M2.07812 3.11621V4.15493H3.11685V14.5422C3.11685 14.8177 3.22629 15.0819 3.42108 15.2767C3.61588 15.4715 3.88009 15.5809 4.15557 15.5809H12.4654C12.7409 15.5809 13.0051 15.4715 13.1999 15.2767C13.3947 15.0819 13.5041 14.8177 13.5041 14.5422V4.15493H14.5428V3.11621H2.07812ZM4.15557 14.5422V4.15493H12.4654V14.5422H4.15557Z'
					fill='#636770'
				/>
				<path
					d='M6.23242 1.03882H10.3873V2.07754H6.23242V1.03882Z'
					fill='#636770'
				/>
			</svg>
		</>
	)
}
