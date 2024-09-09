export const environment = {
	production: true,
	msalConfig: {
		auth: {
			  clientId: 'd2aeae93-ca05-40b1-9032-7e7842054ad8', //drink redemption
			  authority: 'https://login.microsoftonline.com/80132c19-eaaa-4b91-acf7-a3ed9a50c97b' // loves prod
		}
	},
	apiConfig: {
	  scopes: ['user.read'],
	  uri: 'https://graph.microsoft.com/v1.0/me'
  }
  };