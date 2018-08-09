import TokenClient from '@okta/okta-react-native'

export default tokenClient = new TokenClient({
  issuer: 'https://{yourOktaDomain}.com/oauth2/default',
  client_id: '{clientId}',
  scope: 'openid profile',
  redirect_uri: __DEV__ ?
    'exp://localhost:19000/+expo-auth-session' :
    'com.{yourReversedOktaDomain}:/callback',
});
