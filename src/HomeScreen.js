import React,{Component} from 'react';
import {View,Text,TextInput,Button,StatusBar,Platform} from 'react-native';

export default class HomeScreen extends Component {
    static navigationOptions = ({ navigation }) => {
        return {
            title: 'Home',
            headerRight: (
                <Button
                    onPress={navigation.getParam('increaseCount')}
                    title="Info"
                    color={Platform.OS === 'ios' ? '#fff' : null}
                />
            ),
        };

    };
    componentWillMount() {
        this.props.navigation.setParams({ increaseCount: this._increaseCount });
    }

    state = {
        count: 0,
    };

    _increaseCount = () => {
        this.setState({ count: this.state.count + 1 });
    };

    render() {

        return (
            <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
                {/*/设置状态栏背景色*/}
                <StatusBar
                    barStyle="light-content"
                    backgroundColor="#6a51ae"
                />
                <Text>Home Screen</Text>
                <Text>Count: {this.state.count}</Text>
                <Button
                    title="Go to Details"
                    onPress={() => {
                        /* 1. Navigate to the Details route with params */
                        this.props.navigation.navigate('Details', {
                            itemId: 86,
                            otherParam: 'First Details',
                        });
                    }}
                />
            </View>
        )
    }
}