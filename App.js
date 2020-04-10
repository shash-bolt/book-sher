import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

import Login from './screens/Login' 
import RegistrationPage from './screens/RegistrationPage'


export default function App() {
  return (
    <View>
     <RegistrationPage/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
