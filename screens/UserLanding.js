import * as React from 'react';
import { Button, View,Text } from 'react-native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';

import HeaderComp from '../components/HeaderComp'
import UserLandingNavigationComp from '../components/UserLandingNavigationComp';

export default function UserLanding(props) { 
  const VerifiedUser = props.route.params.VerifiedUser;

  return ( 
    // <View>
    //   <HeaderComp/>
      <UserLandingNavigationComp VerifiedUser={VerifiedUser}/>
    //   <Text>RandomText</Text>
    // </View>   
    

  );
}