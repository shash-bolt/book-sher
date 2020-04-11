import React from 'react';
import {  Text,  View, TouchableOpacity } from 'react-native';

import styles from '../Styles/NewUserLoginStyle'

export default function NewUserLoginComp(props) {
    
    return (

        <View style={styles.container}>

           
            <TouchableOpacity 
                style={styles.registerBtn}
                onPress={props.setNav}
            >
                <Text style={styles.registerText}>New Registration</Text>
            </TouchableOpacity>

            </View>
      
    )
}
