import React, { useState } from 'react';
import { StyleSheet, Text, TextInput, View, TouchableOpacity } from 'react-native';
import Navigation from 'react-native-navigation'

import HeaderComp from '../components/HeaderComp'
import LoginComp from '../components/LoginComp'
import NewUserLoginComp from '../components/NewUserLoginComp'
import ContinueGuestComp from '../components/ContinueGuestComp'
export default function Login() {
    
    return (
        <View>
            <HeaderComp />
            <LoginComp/>
            <NewUserLoginComp/>
            <ContinueGuestComp/>
        </View>

    )
}
