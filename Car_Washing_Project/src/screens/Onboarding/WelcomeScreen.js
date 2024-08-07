import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  ImageBackground,
  TouchableOpacity,
  Image,
} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';

export default function WelcomeScreen({navigation}) {
  return (
    <View style={styles.container}>
      <ImageBackground
        style={styles.imageBackground}
        source={require('../../assets/images/car-image.png')}
        resizeMode="cover">
        <LinearGradient
          colors={['rgba(82,134,243,0.8)', 'rgba(16,41,96,0.8)']}
          style={styles.gradient}
        />
        <View style={styles.logoContainer}>
          <Image
            source={require('../../assets/images/logo1.png')}
            style={styles.logo}
          />
        </View>
        <View style={styles.endContainer}>
          <View style={styles.textContainer}>
            <Text style={styles.text}>
              Your Journey to a{' '}
              <Text style={[styles.text, {color: '#5286F3'}]}>
                Gleaming Car Begins Here!
              </Text>
            </Text>
          </View>
          <TouchableOpacity
            style={styles.button}
            onPress={() => navigation.navigate('Auth', {screen: 'Signup'})}>
            <Text style={styles.buttonText}>Let's Get Started</Text>
          </TouchableOpacity>
          <Text style={styles.text1}>
            Already have an account?{' '}
            <Text
              style={[styles.text1, {color: '#5286F3'}]}
              onPress={() => navigation.navigate('Auth', {screen: 'Signup'})}>
              Sign in
            </Text>
          </Text>
        </View>
      </ImageBackground>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  imageBackground: {
    flex: 1,
  },
  gradient: {
    ...StyleSheet.absoluteFillObject,
  },
  logoContainer: {
    marginTop: '60%',
    alignSelf: 'center',
  },
  logo: {
    height: 137,
    width: 301,
  },
  textContainer: {
    marginTop: 20,
    paddingHorizontal: 20,
    alignItems: 'center',
  },
  text: {
    color: '#fff',
    fontSize: 20,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  endContainer: {
    position: 'absolute',
    bottom: 20,
    alignSelf: 'center',
    gap: 20,
  },
  button: {
    backgroundColor: '#5286F3',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 25,
    marginTop: 20,
    alignSelf: 'center',
    width: 270,
  },
  buttonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  text1: {
    fontSize: 12,
    color: '#fff',
    textAlign: 'center',
    fontWeight: 'bold',
    marginTop: 10,
  },
});
