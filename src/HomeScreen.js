import React,{Component} from 'react';
import {View,Text,TextInput,Button,StatusBar} from 'react-native';

export default class HomeScreen extends Component {
    static navigationOptions = {
        title: 'Home',
        headerRight: (
            <Button
                onPress={() => alert('This is a button!')}
                title="Info"
                color="#fff"
            />
        ),
    };
    constructor(props) {
        super(props);
        this.state = {text: ''};
    }
    render() {

        return (
            <View style={{padding: 10}}>
                {/*/设置状态栏背景色*/}
                <StatusBar
                    barStyle="light-content"
                    backgroundColor="#6a51ae"
                />
                <TextInput
                    style={{height: 40}}
                    placeholder="Type here to translate!"
                    onChangeText={(text) => this.setState({text})}
                />
                <Text style={{padding: 10, fontSize: 42}}>
                    {this.state.text.split(' ').map((word) => word && '🍕').join(' ')}
                </Text>
            </View>
        )
    }
}