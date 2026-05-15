import React from 'react';
import { NavigationContainer } from '@react-navigation/native';

// @ts-ignore: mengimpor modul TSX sementara opsi kompiler jsx tidak diatur
import AppNavigator from './src/navigation/AppNavigator';

export default function App() {
  return React.createElement(
    NavigationContainer,
    null,
    React.createElement(AppNavigator, null)
  );
}