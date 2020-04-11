import React, { useState } from 'react';
import { Text, View, ScrollView, Image, Modal } from 'react-native';
import { TextInput, Button, Card } from 'react-native-paper'

import styles from '../Styles/FullScreenCardCompStyle'

import LandingPageCardComp from './LandingPageCardComp'

export default function LandingHomeComp() {

    return (
        <ScrollView>
            <LandingPageCardComp/>            
    </ScrollView>

    )
}