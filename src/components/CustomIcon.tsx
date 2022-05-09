import { Button, Tooltip } from 'antd'

interface IconProps {
	url: string
}

const CustomIcon: React.FC<IconProps> = ({ url }) => {
	return (
		<span className='custom-icon'>
			<img src={url} alt='icon' />
		</span>
	)
}

export default CustomIcon
