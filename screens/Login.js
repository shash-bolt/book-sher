import React, { useState } from 'react';
import { StyleSheet, Text, TextInput, View, TouchableOpacity } from 'react-native';

import HeaderComp from '../components/HeaderComp'
import LoginComp from '../components/LoginComp'
import NewUserLoginComp from '../components/NewUserLoginComp'

export default function Login() {
    
    return (
        <View>
            <HeaderComp />
            <LoginComp/>
            <NewUserLoginComp/>
        </View>

    )
}
