import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Appbar } from 'react-native-paper';

import styles from '../Styles/HeaderCompStyle'


export default class MyComponent extends React.Component {
    render() {
        return (
            <Appbar.Header>
                <Appbar.Content
                    title="BookSher"
                    subtitle="Create and Share Books..!!"
                />
            </Appbar.Header>
        );
    }
}