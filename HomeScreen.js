import React,{Component} from 'react';
import {View,Text} from 'react-native';
export default class HomeScreen extends Component {
    static navigationOptions = {
        title: 'Chat with Lucy',
    }
    render() {
        return (
            <Text>HomeScreen</Text>
        )
    }
}