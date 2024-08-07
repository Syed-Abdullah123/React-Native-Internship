import React from 'react';
import {StatusBar, Text, TouchableOpacity} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Icon from 'react-native-vector-icons/Ionicons';

import SplashScreen from './src/screens/Onboarding/SplashScreen';
import WelcomeScreen from './src/screens/Onboarding/WelcomeScreen';

import SignupScreen from './src/screens/auth/Signup';
import SigninScreen from './src/screens/auth/Signin';

import HomeScreen from './src/screens/Home/HomeScreen';
import ChooseDeckScreen from './src/screens/Home/ChooseDeckScreen';

import AddVehicleScreen from './src/screens/AddVehicle/AddVehicleScreen';
import CarDetailsScreen from './src/screens/AddVehicle/CarDetailsScreen';

import ProfileScreen from './src/screens/Profile/ProfileScreen';

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

const OnboardingNavigator = () => {
  return (
    <Stack.Navigator
      screenOptions={{headerShown: false}}
      initialRouteName="Splash">
      <Stack.Screen name="Splash" component={SplashScreen} />
      <Stack.Screen name="Welcome" component={WelcomeScreen} />
    </Stack.Navigator>
  );
};

const AuthNavigator = () => {
  return (
    <Stack.Navigator
      screenOptions={{headerShown: false}}
      initialRouteName="Signup">
      <Stack.Screen name="Signin" component={SigninScreen} />
      <Stack.Screen name="Signup" component={SignupScreen} />
    </Stack.Navigator>
  );
};

const TabNavigator = () => {
  return (
    <Tab.Navigator
      screenOptions={({route}) => ({
        tabBarIcon: ({color, size}) => {
          let iconName;
          if (route.name === 'Home') {
            iconName = 'home-outline';
          } else if (route.name === 'AddVehicle') {
            iconName = 'car-outline';
          } else if (route.name === 'Profile') {
            iconName = 'person-outline';
          }
          return <Icon name={iconName} size={size} color={color} />;
        },
        tabBarActiveTintColor: '#007AFF',
        tabBarInactiveTintColor: 'gray',
        tabBarStyle: {
          backgroundColor: '#fff',
          borderTopWidth: 0,
          height: 60,
          paddingTop: 5,
          paddingBottom: 5,
          width: '100%',
          alignSelf: 'center',
        },
        tabBarItemStyle: {
          paddingBottom: 10,
        },
      })}>
      <Tab.Screen
        name="Home"
        component={HomeScreen}
        options={{
          title: 'Dashboard',
          headerTitleAlign: 'center',
          headerRight: () => <Text style={{marginRight: 20}}>History</Text>,
        }}
      />
      <Tab.Screen
        name="AddVehicle"
        component={AddVehicleScreen}
        options={{title: 'Add a vehicle'}}
      />
      <Tab.Screen
        name="Profile"
        component={ProfileScreen}
        options={{title: 'Profile'}}
      />
    </Tab.Navigator>
  );
};

const AppNavigator = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{headerShown: false}}
        initialRouteName="Onboarding">
        <Stack.Screen name="Onboarding" component={OnboardingNavigator} />
        <Stack.Screen name="Auth" component={AuthNavigator} />
        <Stack.Screen name="Main" component={TabNavigator} />
        <Stack.Screen
          name="CarDetails"
          component={CarDetailsScreen}
          options={({navigation}) => ({
            headerShown: true,
            title: 'Car Details',
            headerTitleAlign: 'center',
            headerLeft: () => (
              <TouchableOpacity onPress={() => navigation.goBack()}>
                <Icon name="arrow-back-outline" size={25} color={'#000'} />
              </TouchableOpacity>
            ),
          })}
        />
        <Stack.Screen
          name="ChooseDeck"
          component={ChooseDeckScreen}
          options={{headerShown: true, title: ''}}
        />
      </Stack.Navigator>
      <StatusBar barStyle="dark-content" backgroundColor={'#fff'} />
    </NavigationContainer>
  );
};

export default AppNavigator;
