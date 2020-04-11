import React, { useState } from 'react';
import { StyleSheet, Text, TextInput, View, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';

import LoginModalComp from '../components/LoginModalComp'
import HeaderComp from '../components/HeaderComp'
import LoginComp from '../components/LoginComp'
import NewUserLoginComp from '../components/NewUserLoginComp'
import ContinueGuestComp from '../components/ContinueGuestComp'
export default function Login() {
    
    const navigation = useNavigation();

    return (
        <View>
            <LoginModalComp/>
            <HeaderComp />
            <LoginComp/>
            <NewUserLoginComp  setNav ={()=>navigation.navigate('Registration')}/>
            <ContinueGuestComp/>
        </View>

    )
}
