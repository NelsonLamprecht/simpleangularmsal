export const environment = {
    production: false,
    msalConfig: {
        auth: {
            clientId: '11a9c2e3-e71c-4cd8-bd34-3fd8c8872c51', //drink redemption
            authority: 'https://login.microsoftonline.com/4784b4ff-5905-4654-a38a-1d010708ea1b' // lovespoc
        }
    },
    apiConfig: {
        scopes: ['user.read'],
        uri: 'https://graph.microsoft.com/v1.0/me'
    }
};
