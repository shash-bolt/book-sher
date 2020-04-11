import React from 'react';
import { StyleSheet, Text, TextInput, View, TouchableOpacity } from 'react-native';


import RegistrationPageComp from '../components/RegistrationPageComp'
import HeaderComp from '../components/HeaderComp'

export default function RegistrationPage() {

    return (
        <View>
            <HeaderComp />
            <RegistrationPageComp/>
        </View>

    )
}
