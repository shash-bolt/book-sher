import React, { useState } from 'react';
import { Text, View, ScrollView, Image, Modal } from 'react-native';
import { TextInput, Button, Card,Title, Paragraph } from 'react-native-paper'

export default function LandingPageCardComp(props) {

    return (
        <Card>
        <Card.Title title="Card Title" subtitle="Card Subtitle"/>
        <Card.Content>
          <Title>Card title</Title>
          <Paragraph>Card content</Paragraph>
        </Card.Content>
        <Card.Cover source={{ uri: 'https://picsum.photos/700' }} />
        <Card.Actions>
          <Button>Cancel</Button>
          <Button>Ok</Button>
        </Card.Actions>
      </Card>

    )
}