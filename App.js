import React from 'react';
import { StyleSheet, View, Button, Text } from 'react-native';
import * as AuthSession from 'expo-auth-session';
import * as Random from 'expo-random';

AuthSession.makeRedirectUri({ useProxy: true }); // Ensure you use the correct redirect URI

export default function App() {
  const [token, setToken] = React.useState(null);
  const [error, setError] = React.useState(null);

  const spotifyAuth = async () => {
    try {
      const redirectUri = AuthSession.makeRedirectUri({ useProxy: true });
	  console.log("Redirect URI: ", redirectUri);
      const clientId = '868c93bc7c7e400abb6ec9349cc9c4ee'; // Replace with your Spotify client ID
      const responseType = 'code';
      const scope = encodeURI('user-read-private user-read-email'); // Scopes for which access is requested
      const state = Random.getRandomBytes(16).toString(); // A secure random string for CSRF protection
      const usePKCE = true;
      const result = await AuthSession.startAsync({
        authUrl: `https://accounts.spotify.com/authorize?client_id=${clientId}&response_type=${responseType}&redirect_uri=${encodeURIComponent(redirectUri)}&scope=${scope}&state=${state}&show_dialog=true`,
        usePKCE
      });

      if (result.type === 'success' && result.params.code) {
        // Use the authorization code to get tokens
        const code = result.params.code;
        const tokenResponse = await fetch('https://accounts.spotify.com/api/token', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/x-www-form-urlencoded',
            'Authorization': `Basic ${btoa(`${clientId}:${YOUR_CLIENT_SECRET}`)}`, // Client Secret should only be used here if backend
          },
          body: `grant_type=authorization_code&code=${code}&redirect_uri=${encodeURIComponent(redirectUri)}`
        });
        const data = await tokenResponse.json();
        setToken(data.access_token);
      } else {
        setError(result.params.error || 'Something went wrong');
      }
    } catch (err) {
      setError(err.message);
    }
  };

  return (
    <View style={styles.container}>
      <Button title="Login with Spotify" onPress={spotifyAuth} />
      {token && <Text>Access Token: {token}</Text>}
      {error && <Text>Error: {error}</Text>}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
});
