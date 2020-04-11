import React, { useState } from 'react';
import { Text, View, ScrollView, Image, Modal } from 'react-native';
import { TextInput, Button, Card } from 'react-native-paper'

import styles from '../Styles/FullScreenCardCompStyle'

export default function FullScreenCardComp(props) {

    return (
        <Card
            style={styles.cardBox}
            onPress={() =>
                window.alert("Pic Pressed")
            }
        >
            <Card.Title title={props.cardTitle} />
            <Card.Cover source={{ uri: props.picLink }}
            style={styles.cardPic}>
                {/* <View style={styles.cardPic}>
                    <Image
                        source={{ uri: props.picLink }}
                         />
                </View> */}
                
            </Card.Cover>


        </Card>
    )
}