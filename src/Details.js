import React from 'react';
import { Button, Text, View } from 'react-native';

export default class DetailsScreen extends React.Component {
    static navigationOptions = ({ navigation }) => {
        return {
            title: navigation.getParam('titleParam', 'unknow title'),
        };
    };
    render() {
        //取从上一个界面传递过来的参数
        const { navigation } = this.props;
        const name = navigation.getParam('nameStr', 'unknow');
        return (
            <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                <Text>Name: {JSON.stringify(name)}</Text>
            </View>
        );
    }
}