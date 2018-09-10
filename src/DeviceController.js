/**
 * Copyright (c) 2017-present, Liu Jinyong
 * All rights reserved.
 *
 * https://github.com/huanxsd/MeiTuan
 * @flow
 */

import React, {Component} from 'react'
import {View, StyleSheet, Text, TextInput, TouchableOpacity} from 'react-native'


export default class DeviceController extends Component {
    static navigationOptions = ({ navigation }) => {
        return {
            title: navigation.getParam('titleParam', 'unknow title'),
        };
    };

    render() {
        return (
            <View style={styles.container}>
                <TouchableOpacity
                    style={styles.item}
                    // onPress={this.onButtonPress}
                >
                    <Text style={styles.itemText}>设备控制</Text>
                </TouchableOpacity>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        padding: 10,
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


