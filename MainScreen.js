import React, {useEffect} from 'react';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import {NavigationContainer} from '@react-navigation/native';
import {navigationRef} from './RootNavigation';
import {createStackNavigator} from '@react-navigation/stack';
import LandingScreen from './LandingScreen';
import LoginScreen from './LoginScreen';
import ForgotScreen from './ForgotScreen';
import CheckResetCodeScreen from './CheckResetCodeScreen';
import ResetPasswordScreen from './ResetPasswordScreen';
import ResetSuccessScreen from './ResetSuccessScreen';
import RegisterScreen from './RegisterScreen';
import RegisterSuccessScreen from './RegisterSuccessScreen';
import SecureScreen from './secure_screens/SecureScreen';

const MainScreen = () => {
  const Stack = createStackNavigator();
  const headerStyle = require('./json/header_style.json');

  useEffect(() => {
    console.log('Main Screen');
  }, []);

  return (
    <SafeAreaProvider>
      <NavigationContainer ref={navigationRef}>
        <Stack.Navigator
          initialRouteName="Landing"
          headerMode="screen"
          screenOptions={{
            gesturesEnabled: false,
          }}>
          <Stack.Screen
            name="Landing"
            options={{headerShown: false}}
            component={LandingScreen}
          />
          <Stack.Screen
            name="Login"
            options={{headerShown: false}}
            component={LoginScreen}
          />
          <Stack.Screen
            name="Register"
            options={{
              ...headerStyle,
              headerShown: true,
              headerTitle: 'REGISTER',
            }}
            component={RegisterScreen}
          />
          <Stack.Screen
            name="Forgot"
            options={{
              ...headerStyle,
              headerShown: true,
              headerTitle: 'FORGOT PASSWORD',
              headerBackTitle: '',
            }}
            component={ForgotScreen}
          />
          <Stack.Screen
            name="CheckReset"
            options={{
              ...headerStyle,
              headerShown: true,
              headerTitle: 'CHECK RESET CODE',
              headerBackTitle: '',
            }}
            component={CheckResetCodeScreen}
          />
          <Stack.Screen
            name="ResetPassword"
            options={{
              ...headerStyle,
              headerShown: true,
              headerTitle: 'RESET PASSWORD',
              headerBackTitle: '',
            }}
            component={ResetPasswordScreen}
          />
          <Stack.Screen
            name="ResetSuccess"
            options={{
              ...headerStyle,
              headerShown: true,
              headerLeft: (props) => null,
              headerTitle: '',
              headerBackTitle: '',
            }}
            component={ResetSuccessScreen}
          />
          <Stack.Screen
            name="RegisterSuccess"
            options={{
              ...headerStyle,
              headerShown: true,
              headerLeft: (props) => null,
            }}
            component={RegisterSuccessScreen}
          />
          <Stack.Screen
            name="Secure"
            component={SecureScreen}
            options={{headerShown: false}}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </SafeAreaProvider>
  );
};

export default MainScreen;
