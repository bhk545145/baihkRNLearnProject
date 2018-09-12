/**
 * Copyright (c) 2017-present, Liu Jinyong
 * All rights reserved.
 *
 * https://github.com/huanxsd/MeiTuan
 * @flow
 */

import React, {Component} from 'react'
import {View, StyleSheet, Text, TextInput, TouchableOpacity, NativeModules} from 'react-native'
import {RefreshState} from "react-native-refresh-list-view";

var CalendarManager = NativeModules.CalendarManager;

export default class DeviceController extends Component {
    static navigationOptions = ({ navigation }) => {
        return {
            title: navigation.getParam('titleParam', 'unknow title'),
        };
    };

    constructor(props) {
        super(props);
        this.state = {
        };
    }
    componentDidMount() {
        this.GetUserInfo();
    }
    GetUserInfo() {
        //取从上一个界面传递过来的参数
        const { navigation } = this.props;
        const endPointInfo = navigation.getParam('endPointInfo', 'unknow');
        this.setState({endPointInfo:endPointInfo});

    }

    render() {
        return (
            <View style={styles.container}>
                <TouchableOpacity
                    style={styles.item}
                    onPress={this.onButtonPress}
                >
                    <Text style={styles.itemText}>设备控制</Text>
                </TouchableOpacity>
            </View>
        );
    }

    onButtonPress = () => {
        let info = this.props.navigation.state.params.info
        let endPointInfo = {
            "roomId":"2008111905876986177",
            "context":"",
            "endPointId":"3009151143314194483",
            "deviceInfo":info,
            "type":3,
            "icon":"http:\/\/www.broadlink.com.cn\/images\/homeFullpage\/broadlink.png",
            "name":"SP4M  30056",
        };
        let subEndPointInfo = {

        };
        let params =	{
            "did":info.did,
            "act":"set",
            "params":["pwr"],
            "vals":[[{"val":1,"idx":1}]],
            "prop":"stdctrl",
        };
        CalendarManager.deviceControl('DevControl',JSON.stringify(endPointInfo),JSON.stringify(subEndPointInfo),JSON.stringify(params),(error, events) =>{
            if (error) {
                var errors = 'error:' +  error;
                alerter(errors);
            } else {
                var data = JSON.parse(events);
                console.log(data);
            }
        });
    }
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        padding: 10,
        justifyContent: 'space-around',
        backgroundColor: 'white',
    },
    item: {
        // flex: 1,
        borderRadius: 20,
        padding: 10,
        fontSize: 18,
        height:40,
        width:140,
        justifyContent: 'flex-start',
        alignItems: 'center',
        backgroundColor:'#ED5601',
    },
    itemText:{
        color:'white',
    },
})


