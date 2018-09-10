/**
 * Copyright (c) 2017-present, Liu Jinyong
 * All rights reserved.
 *
 * https://github.com/huanxsd/MeiTuan
 * @flow
 */

import React, {PureComponent} from 'react'
import {View, Text, StyleSheet, TouchableOpacity, Image, PixelRatio} from 'react-native'

const color = {
    theme: '#06C1AE',
    border: '#e0e0e0',
    background: '#f3f3f3'
}

class DeviceCell extends PureComponent {

    render() {
        console.log('render cell')
        let {info} = this.props

        // info.imageUrl = info.imageUrl.replace('w.h', '160.0')

        return (
            <TouchableOpacity style={styles.container} onPress={this.props.onPress}>
                <Image source={{uri: 'http://www.broadlink.com.cn/images/homeFullpage/broadlink.png'}} style={styles.icon} />

                <View style={styles.cell}>
                    <Text style={styles.p}>did:{info.did}</Text>
                    <Text style={styles.p}>mac:{info.mac}</Text>
                    <Text style={styles.p}>name:{info.name}</Text>
                    <Text style={styles.p}>pid:{info.pid}</Text>
                    {/*<Text style={styles.textItem}>cookie:{info.cookie}</Text>*/}
                </View>
            </TouchableOpacity>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        padding: 10,
        borderBottomWidth: 1 / PixelRatio.get(),
        borderColor: color.border,
        backgroundColor: 'white',
    },
    icon: {
        alignItems: 'center',
        width: 80,
        height: 80,
        borderRadius: 5,
    },
    rightContainer: {
        flex: 1,
        paddingLeft: 20,
        paddingRight: 10,
    },
    price: {
        color: color.theme
    },
    h1: {
        fontSize: 15,
        fontWeight: 'bold',
        color: '#222222',
    },
    p: {
        fontSize: 13,
        color: '#777777',
    },
    cell: {
        width: 550,
        height: 80,
        flexDirection: 'column',
        flexWrap:'wrap',
        justifyContent: 'flex-start',
        // alignItems: 'center',
        alignContent: 'space-between',
    },
})

export default DeviceCell
