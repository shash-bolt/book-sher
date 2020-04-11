import React from 'react';

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import Login from './screens/Login' 
import RegistrationPage from './screens/RegistrationPage'
import UserLanding from './screens/UserLanding';

const Stack = createStackNavigator();

export default function App() {
  return (

    <NavigationContainer>
      <Stack.Navigator 
        screenOptions={{headerShown: false}}
        initialRouteName="Login"
      >
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="Registration" component={RegistrationPage} />
        <Stack.Screen name="UserLanding" component={UserLanding} />
      </Stack.Navigator>
    </NavigationContainer>

  );
}
