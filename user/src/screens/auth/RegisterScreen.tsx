import React, { useState } from 'react';

import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
} from 'react-native';

import { globalStyles } from '../../styles/globalStyles';

export default function RegisterScreen() {
  const [name, setName] = useState<string>('');
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');

  return React.createElement(
    View,
    { style: globalStyles.container },
    React.createElement(Text, { style: globalStyles.title }, 'Register'),
    React.createElement(TextInput, {
      placeholder: 'Nama',
      style: globalStyles.input,
      value: name,
      onChangeText: setName,
    }),
    React.createElement(TextInput, {
      placeholder: 'Email',
      style: globalStyles.input,
      value: email,
      onChangeText: setEmail,
    }),
    React.createElement(TextInput, {
      placeholder: 'Password',
      secureTextEntry: true,
      style: globalStyles.input,
      value: password,
      onChangeText: setPassword,
    }),
    React.createElement(
      TouchableOpacity,
      { style: globalStyles.button },
      React.createElement(Text, { style: globalStyles.buttonText }, 'Register')
    )
  );
}