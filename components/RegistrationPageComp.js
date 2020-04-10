import React, { useState } from 'react';
import { Text, View, Modal } from 'react-native';
import { TextInput, Button } from 'react-native-paper'

import styles from '../Styles/RegistrationPageCompStyle'

import PicModalComp from './PicModalComp'

export default function RegistrationPageComp() {

    const [UserName, setUserName] = useState("");
    const [Email, setEmail] = useState("");
    const [Password, setPassword] = useState("");
    const [PixModal, setPixModal] = useState(false);

    return (

        <View style={styles.container}>
            <View style={styles.MainTextContainer}>
                <Text style={styles.mainText}>
                    ::User Registration::
            </Text>
            </View>

            <TextInput
                label='UserName'
                value={UserName}
                style={styles.TextContainer}
                mode="outlined"
                onChangeText={text => setUserName(text)}
            />
            <TextInput
                label='Email'
                value={Email}
                style={styles.TextContainer}
                mode="outlined"
                onChangeText={text => setEmail(text)}
            />
            <TextInput
                label='Password'
                value={Password}
                style={styles.TextContainer}
                mode="outlined"
                onChangeText={text => setPassword(text)}
                secureTextEntry={true}
            />

            <Button
                icon="camera"
                mode="outlined"
                onPress={() => setPixModal(true)}
                style={styles.pixButton}>
                Profile Picture
            </Button>
            <PicModalComp PicModal={PixModal} setPicModal={setPixModal} />

            <Button
                mode="contained"
                style={styles.SubmitBtn}>
                SUBMIT
            </Button>
        </View>




    )
}
