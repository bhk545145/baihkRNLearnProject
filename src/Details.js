import React from 'react';
import { Button, Text, View } from 'react-native';

export default class DetailsScreen extends React.Component {
    render() {
        const { navigation } = this.props;
        const name = navigation.getParam('nameStr', 'unknow');
        return (
            <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                <Text>Name: {JSON.stringify(name)}</Text>
            </View>
        );
    }
}