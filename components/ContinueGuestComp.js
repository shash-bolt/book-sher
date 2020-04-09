import React from 'react';
import {  Text,  View, TouchableOpacity } from 'react-native';


import styles from '../Styles/ContinueGuestCompStyle'

export default function ContinueGuestComp() {
    
    return (

        <View style={styles.container}>
           
            <TouchableOpacity style={styles.GuestBtn}>
                <Text style={styles.GuestText}>Continue as Guest</Text>
            </TouchableOpacity>

            </View>
      
    )
}
