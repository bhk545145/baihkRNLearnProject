import React,{Component} from 'react';
import {View, Text, TextInput, StyleSheet, TouchableOpacity, NativeModules, Alert} from 'react-native';
import { NetworkInfo } from 'react-native-network-info';
var CalendarManager = NativeModules.CalendarManager;

const alerter = (events) => {
    Alert.alert(events);
}
export default class FirstScreen extends Component {
    static navigationOptions = {
        title: '配网',
    };
    constructor(props) {
        super(props);
        this.state = { ssidText: 'BroadLink_ZJJ',
                       passwordText: '1234567890',
                        result: '等待配网',
                     };
    }
    onButtonPress = () => {
        loginDic =	{"ssid":this.state.ssidText,
            "password":this.state.passwordText,
        };
        this.setState({result:'正在配网'});
        CalendarManager.deviceConfig('EasyConfig',JSON.stringify(loginDic),(error, events) =>{
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

    componentDidMount()
    {
        // Get SSID
        // NetworkInfo.getSSID(ssid => {
        //     console.log(ssid);
        //     this.setState({ssidText:ssid});
        // });
    }



    render() {

        return (
            <View style={styles.container}>
                <View style={styles.box}>
                    <View style={styles.name}>
                        <Text>WiFi</Text>
                        <TextInput
                            style={styles.InputText}
                            onChangeText={(text) => this.setState({ssidText:text})}
                            value={this.state.ssidText}
                        />
                    </View>
                    <View style={styles.name}>
                        <Text>密码</Text>
                        <TextInput
                            style={styles.InputText}
                            onChangeText={(text) => this.setState({passwordText:text})}
                            value={this.state.passwordText}
                        />
                    </View>

                </View>
                <Text>{this.state.result}</Text>
                <TouchableOpacity
                    style={styles.item}
                    onPress={this.onButtonPress}
                >
                    <Text style={styles.itemText}>一键配网</Text>
                </TouchableOpacity>
            </View>
        )
    }
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingTop: 22,
        justifyContent: 'space-around',
        alignItems: 'center',
    },
    box: {
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
    },
    InputText:{
        height: 35,
        width:140,
        borderColor: '#0f0f0f',
        borderWidth: 1
    },
    item: {
        // flex: 1,
        borderRadius: 20,
        padding: 10,
        fontSize: 18,
        height:40,
        width:140,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor:'#ED5601',
    },
    itemText:{
        color:'white',
    },
    name: {
        width: 220,
        height: 50,
        flexDirection: 'row',
        flexWrap:'wrap',
        justifyContent: 'space-between',
        alignItems: 'center',
        alignContent: 'space-between',
    }
})
