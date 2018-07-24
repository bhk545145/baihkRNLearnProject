import React, { Component } from 'react';
import { SectionList, StyleSheet, Text, View, Button, Alert,FlatList,TouchableOpacity,Image,TextInput } from 'react-native';

const onButtonPress = () => {
    Alert.alert('123');
}



export default class SectionListBasics extends Component {
    constructor(props) {
        super(props);
        this.state = { text: '' };
    }
  render() {
    return (
      <View style={styles.container}>
          <Image
              style={styles.logo}
              // resizeMode={Image.resizeMode.repeat}
              source={{uri: 'http://www.broadlink.com.cn/images/homeFullpage/broadlink.png'}}
          />
          <TextInput
              style={styles.InputText}
              onChangeText={(text) => this.setState({text})}
              value={this.state.text}
          />
          <TouchableOpacity
              style={styles.item}
              onPress={onButtonPress}
          >
              <Text style={styles.itemText}>login</Text>
          </TouchableOpacity>
      </View>

    );
  }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingTop: 22,
        justifyContent: 'space-around',
        alignItems: 'center',
    },
    sectionHeader: {
        paddingTop: 2,
        paddingLeft: 10,
        paddingRight: 10,
        paddingBottom: 2,
        fontSize: 14,
        fontWeight: 'bold',
        backgroundColor: 'rgba(247,247,247,1.0)',
    },
    item: {
        borderRadius: 20,
        padding: 10,
        fontSize: 18,
        height:40,
        width:140,
        justifyContent: 'flex-start',
        alignItems: 'center',
        backgroundColor:'green',
    },
    itemText:{
        color:'white',
    },
    InputText:{
        height: 30,
        width:140,
        borderColor: '#0f0f0f',
        borderWidth: 1
    },
    logo: {

        alignItems: 'center',
        width: 250,
        height: 60,
    },
})

