import React, {useState} from 'react';
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
} from 'react-native';

export default function SignupScreen({navigation}) {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  return (
    <View style={styles.container}>
      <View style={styles.titleContainer}>
        <Text style={styles.title}>Sign Up</Text>
        <Text>Hi, Welcome to Car Washing App.</Text>
      </View>
      <View style={styles.inputContainer}>
        <Text>Enter Username</Text>
        <TextInput
          placeholder="Username"
          onChangeText={text => setUsername(text)}
          style={styles.input}
        />
      </View>
      <View style={styles.inputContainer}>
        <Text>Enter Email</Text>
        <TextInput
          placeholder="Email"
          onChangeText={text => setEmail(text)}
          style={styles.input}
        />
      </View>
      <View style={styles.inputContainer}>
        <Text>Enter Password</Text>
        <TextInput
          placeholder="Password"
          onChangeText={text => setPassword(text)}
          style={styles.input}
          secureTextEntry={true}
        />
      </View>
      <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.navigate('Signin')}>
        <Text style={styles.buttonText}>Create Account</Text>
      </TouchableOpacity>
      <View style={styles.endContainer}>
        <Text style={styles.text1}>
          Already have an account?{' '}
          <Text
            style={[styles.text1, {color: '#5286F3'}]}
            onPress={() => navigation.navigate('Signin')}>
            Sign in
          </Text>
        </Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingHorizontal: 15,
  },
  titleContainer: {
    alignItems: 'center',
    marginBottom: 40,
    marginTop: 50,
  },
  title: {
    fontSize: 34,
    fontWeight: 'bold',
  },
  inputContainer: {
    width: '100%',
    marginBottom: 15,
  },
  input: {
    backgroundColor: '#eee',
    paddingHorizontal: 15,
    paddingVertical: 10,
    borderRadius: 10,
    marginTop: 5,
  },
  button: {
    backgroundColor: '#5286F3',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 25,
    marginTop: 30,
    alignSelf: 'center',
    width: 270,
  },
  buttonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  endContainer: {
    position: 'absolute',
    bottom: 20,
    alignSelf: 'center',
    gap: 20,
  },
  text1: {
    fontSize: 12,
    textAlign: 'center',
    fontWeight: 'bold',
  },
});
