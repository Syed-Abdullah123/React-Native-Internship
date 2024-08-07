import React, {useEffect} from 'react';
import {StyleSheet, View, Image} from 'react-native';

export default function SplashScreen({navigation}) {
  useEffect(() => {
    const timeout = setTimeout(() => {
      navigation.navigate('Welcome');
    }, 3000);

    return () => clearTimeout(timeout);
  }, []);

  return (
    <View style={styles.container}>
      <Image
        source={require('./../../assets/images/logo.png')}
        style={styles.logo}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
  },
  logo: {
    height: 137,
    width: 301,
  },
});
