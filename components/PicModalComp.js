import React, { useState } from 'react';
import { Text, View, Modal } from 'react-native';
import { TextInput, Button } from 'react-native-paper'

import styles from '../Styles/PicModalCompStyle'

export default function PicModalComp(props) {
    return (

        <Modal
            animationType="fade"
            visible={props.PicModal}
            onRequestClose={() =>
                props.setPicModal(false)
            }
            transparent={true}
            
        >
            <View style={styles.completeModalView}>
                <View style={styles.modalSplitVertical}>
                    <Button
                        icon="camera"
                        mode="contained"
                        //   onPress={() => setPixModal(true)}
                        style={styles.fileButton}>
                        Camera
                    </Button>

                    <Button
                        icon="file-upload"
                        mode="contained"
                        //  onPress={() => setPixModal(true)}
                        style={styles.fileButton}>
                        Gallery
                    </Button>
                </View>

                <Button
                    onPress={() => props.setPicModal(false)}
                    style={styles.pixButton}>
                    Cancel
                </Button>
            </View>


        </Modal>
    )
}