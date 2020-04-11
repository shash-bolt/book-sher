import React, { useState } from 'react';
import { Text, View, ScrollView, Image , Modal} from 'react-native';
import { TextInput, Button } from 'react-native-paper'

import styles from '../Styles/LoginModalCompStyle'

import FullScreenCardComp from './FullScreenCardComp'

export default function LoginModalComp() {
    const[PicModal,setPicModal] = useState(true);

    return (

        <Modal
            animationType="fade"
            visible={PicModal}
            onRequestClose={() =>
                setPicModal(false)
            }
            transparent={true}
                        
        >

        <ScrollView
            horizontal={true}
            //contentContainerStyle={{ width: `${100 * intervals}%` }}    
            showsHorizontalScrollIndicator={true}
            //scrollEventThrottle={200}
            //decelerationRate="fast"
            pagingEnabled
        >

            <FullScreenCardComp cardTitle="Jump" picLink="https://images.pexels.com/photos/214574/pexels-photo-214574.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"/>
            <FullScreenCardComp cardTitle="Walk" picLink="https://images.pexels.com/photos/1236701/pexels-photo-1236701.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"/>
            
            {/* <Image style={styles.PageSize} source={{ uri: "https://images.pexels.com/photos/214574/pexels-photo-214574.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" }} />
            <Image style={styles.PageSize} source={{ uri: "https://images.pexels.com/photos/1236701/pexels-photo-1236701.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" }} />
            <Text> Click outside window to exit</Text> */}

        </ScrollView>

        <Button
                    onPress={() => setPicModal(false)}
                    style={styles.pixButton}>
                    Cancel
                </Button>

        </Modal>
    )
}