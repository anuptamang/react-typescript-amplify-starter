import React from 'react'

interface HeadingTitleType {
	title?: string
	subTitle?: string
}

const HeadingTitle = ({ title, subTitle }: HeadingTitleType) => {
	return (
		<div className='heading-title'>
			<h1>
				<small>{subTitle}</small> {title}
			</h1>
		</div>
	)
}

export default HeadingTitle
