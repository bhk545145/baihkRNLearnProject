/**
 * Copyright (c) 2017-present, Liu Jinyong
 * All rights reserved.
 *
 * https://github.com/huanxsd/MeiTuan
 * @flow
 */

import React, {Component} from 'react'
import {View, StyleSheet, Text, TextInput, TouchableOpacity, NativeModules, Alert} from 'react-native'
import {RefreshState} from "react-native-refresh-list-view";

var CalendarManager = NativeModules.CalendarManager;

const alerter = (events) => {
    Alert.alert(events);
}

export default class DeviceController extends Component {
    static navigationOptions = ({ navigation }) => {
        return {
            title: navigation.getParam('titleParam', 'unknow title'),
        };
    };

    constructor(props) {
        super(props);
        this.state = {
            info: '',
            events:'',
        };
    }
    componentDidMount() {
        this.GetKeyState();
    }
    GetKeyState() {
        let info = this.props.navigation.state.params.info
        this.setState({
            info: info,
        });
    }

    render() {
        return (
            <View style={styles.container}>
                <View>
                    <Text>{JSON.stringify(this.state.events)}</Text>
                </View>
                <View style={styles.buttonStyle}>
                    <TouchableOpacity
                        style={styles.item}
                        onPress={() => this.onButtonPress(1)}
                    >
                        <Text style={styles.itemText}>开</Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                        style={styles.item}
                        onPress={() => this.onButtonPress(0)}
                    >
                        <Text style={styles.itemText}>关</Text>
                    </TouchableOpacity>
                </View>

            </View>
        );
    }

    onButtonPress = (val) => {
        let info = this.state.info;
        let endPointInfo = {
            "roomId":"",
            "context":"",
            "endPointId":"",
            "deviceInfo":info,
            "type":3,
            "icon":"",
            "name":"",
        };
        let subEndPointInfo = {

        };
        let params =	{
            "did":info.did,
            "act":"set",
            "params":["pwr"],
            "vals":[[{"val":val,"idx":1}]],
        };
        CalendarManager.deviceControl('DevControl',JSON.stringify(endPointInfo),JSON.stringify(subEndPointInfo),JSON.stringify(params),(error, events) =>{
            if (error) {
                var errors = 'error:' +  error;
                this.setState({events: events});
            } else {
                var data = JSON.parse(events);
                console.log(data);
                this.setState({events: events});
            }
        });
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'column',
        padding: 10,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'white',
    },
    item: {
        // flex: 1,
        // borderRadius: 20,
        padding: 10,
        fontSize: 18,
        height:80,
        width:80,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor:'#ED5601',
    },
    itemText:{
        color:'white',
    },
    buttonStyle:{
        flexDirection: 'row',
        padding: 10,
        justifyContent: 'center',
        alignItems: 'center',
    },
})


