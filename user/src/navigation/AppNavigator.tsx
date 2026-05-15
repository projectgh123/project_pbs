import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

// @ts-ignore: modul yang diimpor menggunakan TSX, tetapi JSX tidak diaktifkan dalam konfigurasi proyek ini
import LoginScreen from '../screens/auth/LoginScreen';

const Stack = createNativeStackNavigator();

export default function AppNavigator() {
  return React.createElement(
    Stack.Navigator,
    null,
    React.createElement(Stack.Screen, {
      name: 'Login',
      component: LoginScreen,
    })
  );
}