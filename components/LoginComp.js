import React, { useState } from 'react';
import { StyleSheet, Text, TextInput, View, TouchableOpacity } from 'react-native';

import styles from '../Styles/LoginStyle'

export default function LoginComp() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    return (

        <View style={styles.container}>
            <Text style={styles.inputText}>
                ::LOGIN::
            </Text>

            <View style={styles.inputView} >
                <TextInput
                    style={styles.inputText}
                    placeholder="Email.."
                    placeholderTextColor="#003f5c"
                    onChangeText={text => setEmail({ email: text })} />
            </View>
            <View style={styles.inputView} >
                <TextInput
                    style={styles.inputText}
                    placeholder="Password.."
                    placeholderTextColor="#003f5c"
                    onChangeText={text => setPassword({ password: text })} />
            </View>
            <TouchableOpacity style={styles.loginBtn}>
                <Text style={styles.loginText}>ENTER</Text>
            </TouchableOpacity>

            <TouchableOpacity>
                <Text style={styles.forgot}>Forgot Password?</Text>
            </TouchableOpacity>

        </View>




    )
}
