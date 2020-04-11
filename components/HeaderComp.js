import React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';
import { Appbar } from 'react-native-paper';

import styles from '../Styles/HeaderCompStyle'

export default function HeaderComp(props) {
        
    const picSource = () => {
        if (props.picLocation === undefined || props.picLocation === null) {
            return <Image
                        style={styles.ProfileImagePic}
                        source={require('../assets/splash.png')}/>
                
        } else {
            return <Image
                        style={styles.ProfileImagePic}
                        source={{ uri: props.picLocation}}/>
        }
    }
    
    return (

        <Appbar.Header>
            <Appbar.Content
                title="BookSher"
                subtitle="Create and Share Books..!!"
            />

            <View style={styles.ProfileImageBox}>
                {picSource()}            
            </View>
        </Appbar.Header>
    )
}
