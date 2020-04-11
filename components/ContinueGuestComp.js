import React from 'react';
import {  Text,  View, TouchableOpacity } from 'react-native';


import styles from '../Styles/ContinueGuestCompStyle'

export default function ContinueGuestComp(props) {
    
    return (

        <View style={styles.container}>
           
            <TouchableOpacity 
                style={styles.GuestBtn}
                onPress={props.setNav}>
                <Text style={styles.GuestText}>Continue as Guest</Text>
            </TouchableOpacity>

            </View>
      
    )
}
