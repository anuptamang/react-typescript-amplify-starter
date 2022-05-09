import React from 'react'
import { Link } from 'react-router-dom'

const AuthFooter = () => {
	return (
		<footer className='auth-footer'>
			<Link to='/auth'>Back to login</Link>
		</footer>
	)
}

export default AuthFooter
