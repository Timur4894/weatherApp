import React, { useState, useContext } from 'react';
import { View, Text, TextInput, Button, StyleSheet, ImageBackground, } from 'react-native';
import { login } from '../utils/auth';
import { AuthContext } from '../context/auth-context';

const LoginScreen = ({ onLogin }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const authCtx = useContext(AuthContext)

  const handleLogin = async () => {
    try {
      const token = await login(email, password);
      authCtx.authenticate(token);
      //console.log(token)
      onLogin(); 
    } catch (error) {
      setError('Failed to login. Please check your credentials.');
      console.error(error) 
    }
  };

  const image = {uri: 'https://freedesignfile.com/upload/2017/05/White-clouds-with-blue-sky-vector-background-01.jpg'}

  return (

    <ImageBackground source={image} resizeMode="cover" style={styles.image}>

        <View style={styles.container}>
            <Text style={styles.title}>Login</Text>
        <TextInput
            style={styles.input}
            placeholder="Email"
            value={email}
            onChangeText={setEmail}
            keyboardType="email-address"
            autoCapitalize="none"
        />
        <TextInput
            style={styles.input}
            placeholder="Password"
            value={password}
            onChangeText={setPassword}
            secureTextEntry
        />
        <Button title="Login" onPress={handleLogin} />
        </View>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',

  },
  image: {
    flex: 1,
    justifyContent: 'center',
  },
  title: {
    fontSize: 38,
    fontWeight: '900',
    marginBottom: 20
  },
  input: {
    width: '80%',
    height: 40,
    borderColor: 'gray',
    backgroundColor: '#fff',
    borderWidth: 1,
    borderRadius: 10,
    marginBottom: 20,
    paddingHorizontal: 10,
  },
});

export default LoginScreen;
