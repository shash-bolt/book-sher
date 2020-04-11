import * as React from 'react';
import { Button, View } from 'react-native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';


import LandingHomeComp from '../components/LandingHomeComp'
import BookReadComp from '../components/BookReadComp'

const Drawer = createDrawerNavigator();
const Stack = createStackNavigator();

export default function UserLandingNavigationComp(props) {

    const VerifiedUser = props.VerifiedUser;
    console.log(VerifiedUser)
  return (
         
    <NavigationContainer independent={true}  >

      <Drawer.Navigator initialRouteName="Home">
        <Drawer.Screen name="Home" component={LandingHomeComp}/>
       {(
            ()=>{
                if(VerifiedUser)
                return <Drawer.Screen name="Notifications" component={BookReadComp}/>

            }
        )()}
      </Drawer.Navigator>
    </NavigationContainer>
  );
}