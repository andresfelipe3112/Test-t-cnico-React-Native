import React, { useContext, useState } from 'react';
import { View, TextInput, StyleSheet, Text, TouchableOpacity } from 'react-native';
import { ThemeContext } from '../context/ThemeContext';

const LoginScreen = ({ navigation }) => {
  const { theme, toggleTheme } = useContext(ThemeContext); 
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = () => {
    if (email && password) {
      navigation.navigate('List');
    } else {
      alert('Please enter both fields');
    }
  };

  return (
    <View style={[styles.container, { backgroundColor: theme.background }]}>
      
      <Text style={[styles.label, { color: theme.text, opacity:0.5 }]}>Email</Text>
      <TextInput
        placeholder="Email"
        value={email}
        onChangeText={setEmail}
        style={[styles.input, { backgroundColor: theme.inputBackground, color: theme.inputText }]}
      />
      
      <Text style={[styles.label, { color: theme.text, opacity:0.5 }]}>Password</Text>
      <TextInput
        placeholder="Password"
        value={password}
        secureTextEntry
        onChangeText={setPassword}
        style={[styles.input, { backgroundColor: theme.inputBackground, color: theme.inputText }]}
      />
      
      <TouchableOpacity style={[styles.button, { backgroundColor: '#007BFF', marginTop:50 }]} onPress={handleLogin}>
        <Text style={[styles.buttonText, { color: theme.text }]}>Login</Text>
      </TouchableOpacity>
      
      <TouchableOpacity style={[styles.button, { backgroundColor: '#007BFF', marginTop: 10 }]} onPress={toggleTheme}>
        <Text style={[styles.buttonText, { color: theme.text }]}>Toggle Theme</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    padding: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    textAlign: 'center',
  },
  label: {
    fontSize: 16,
    marginBottom: 5,
    textAlign: 'left',
  },
  input: {
    height: 50,
    borderWidth: 1,
    borderColor: '#ccc',
    marginBottom: 10,
    padding: 10,
    borderRadius: 25,
    fontSize: 16,
  },
  button: {
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 25,
    marginBottom: 10,
  },
  buttonText: {
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default LoginScreen;
