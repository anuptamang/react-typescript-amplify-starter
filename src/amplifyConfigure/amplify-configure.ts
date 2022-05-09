import Amplify, { Auth } from 'aws-amplify'
import config from './config'

export const awsConfiguration = () => {
	// console.log(config)

	Amplify.configure({
		Auth: {
			mandatorySignIn: true,
			region: config.REGION,
			userPoolId: config.COGNITO_USER_POOL_ID,

			userPoolWebClientId: config.COGNITO_USER_POOL_WEB_CLIENT_ID,
			endpoints: [
				{
					name: 'Cognito',
					endpoint: config.COGNITO_GATEWAY,
				},
			],
		},
		API: {
			endpoints: [
				{
					name: 'backendApi',
					endpoint: config.BACKEND_API_GATEWAY,
					region: config.REGION,
					custom_header: async () => {
						const session = await Auth.currentSession()
						return {
							Authorization: session.getIdToken().getJwtToken(),
						}
					},
				},
				{
					name: 'backendApiUnAuth',
					endpoint: config.BACKEND_API_GATEWAY,
					region: config.REGION,
				},
			],
		},
	})
}
