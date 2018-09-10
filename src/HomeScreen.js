import React,{Component} from 'react';
import {View,Text,TextInput,Button,StatusBar,Platform,YellowBox,NativeModules} from 'react-native';
var CalendarManager = NativeModules.CalendarManager;

export default class HomeScreen extends Component {
    static navigationOptions = ({ navigation }) => {
        return {
            title: '局域网',
            headerRight: (
                <Button
                    title="Info"
                    color={Platform.OS === 'ios' ? '#fff' : null}
                />
            ),
        };

    };
    constructor(props) {
        super(props);
        this.state = {
            result: '',
        };
    }

    fetchData()
    {
        probe =	{ };
        CalendarManager.deviceConfig('ScanDevices',JSON.stringify(probe),(error, events) =>{
            if (error) {
                var errors = 'error:' +  error;
                alerter(errors);
            } else {
                var data = JSON.parse(events);
                console.log(data);
                this.setState({result:events});
            }
        });

    }

    componentDidMount() {
        this.fetchData();
    }



    render() {
        YellowBox.ignoreWarnings(['Warning: ']);
        return (
            <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
                {/*/设置状态栏背景色*/}
                <StatusBar
                    barStyle="light-content"
                    backgroundColor="#6a51ae"
                />
                <Text>{this.state.result}</Text>
            </View>
        )
    }
}