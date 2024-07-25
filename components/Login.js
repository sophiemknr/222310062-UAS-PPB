import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Alert, KeyboardAvoidingView, TouchableWithoutFeedback, Keyboard } from 'react-native';

const Login = ({ navigation }) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  
  const handleLoginPress = () => {
    const predefinedUsername = 'andin';
    const predefinedpassword = '111';
    if (username === predefinedUsername && password === predefinedpassword) {
      navigation.navigate('Home');
    } else {
      Alert.alert('Error', 'Invalid username or password');
    }
  };

  return (
    <KeyboardAvoidingView style={styles.container} behavior="padding">
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <View style={styles.innerContainer}>
          <Text style={styles.title}>Halo, User!</Text>
          <Text style={styles.subtitle}>Selamat Datang Kembali!</Text>

          <TextInput
            style={styles.input}
            placeholder="Username"
            placeholderTextColor="#0E2A47"
            onChangeText={setUsername}
            value={username}
          />

          <View style={styles.passwordContainer}>
            <TextInput
              style={styles.inputPassword}
              placeholder="Password"
              placeholderTextColor="#0E2A47"
              secureTextEntry={true}
              onChangeText={setPassword}
              value={password}
            />
          </View>

          <TouchableOpacity style={styles.loginButton} onPress={handleLoginPress}>
            <Text style={styles.loginButtonText}>Masuk</Text>
          </TouchableOpacity>
        </View>
      </TouchableWithoutFeedback>
    </KeyboardAvoidingView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#0E2A47',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  innerContainer: {
    width: '100%',
    alignItems: 'center',
  },
  title: {
    fontSize: 32,
    color: '#FFFFFF',
    fontWeight: 'bold',
  },
  subtitle: {
    fontSize: 16,
    color: '#FFFFFF',
    marginBottom: 40,
  },
  input: {
    width: '100%',
    backgroundColor: '#BCC6D5',
    borderRadius: 10,
    padding: 10,
    color: '#0E2A47',
    marginBottom: 20,
  },
  passwordContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    width: '100%',
    backgroundColor: '#BCC6D5',
    borderRadius: 10,
    marginBottom: 20,
  },
  inputPassword: {
    flex: 1,
    padding: 10,
    color: '#0E2A47',
  },
  loginButton: {
    width: '100%',
    backgroundColor: '#4A73C1',
    paddingVertical: 10,
    borderRadius: 10,
    alignItems: 'center',
    marginBottom: 20,
  },
  loginButtonText: {
    color: '#FFFFFF',
    fontSize: 18,
  },
  forgotPasswordText: {
    color: '#BCC6D5',
    marginBottom: 40,
  }
});

export default Login;


