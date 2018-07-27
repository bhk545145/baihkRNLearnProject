import React, { Component } from 'react';
import { SectionList, StyleSheet, Text, View, Button, Alert,FlatList,TouchableOpacity,Image,TextInput,NativeModules } from 'react-native';
import { StackNavigator } from 'react-navigation';

var CalendarManager = NativeModules.CalendarManager;

const alerter = (events) => {
    Alert.alert(events);
}

// const App = StackNavigator({
//     Main: {screen: MainScreen},
//     Profile: {screen: ProfileScreen},
// });


export default class SectionListBasics extends Component {
    constructor(props) {
        super(props);
        this.state = { nameText: '13567165451',
                       passwordText: '1234512345',
                     };
    }

    onButtonPress = () => {

        CalendarManager.addEvent(this.state.nameText, this.state.passwordText,(error, events) =>{
            if (error) {
                // console.error(error);
                var errors = 'error:' +  error;
                alerter(errors);
            } else {
                this.setState({events:events});
                console.log(events);
                alerter(events);
            }
        });
    }

    // static navigationOptions = {
    //     title: 'Welcome',
    // };

  render() {
    return (
      <View style={styles.container}>
          <Image
              style={styles.logo}
              // resizeMode={Image.resizeMode.repeat}
              source={{uri: 'http://www.broadlink.com.cn/images/homeFullpage/broadlink.png'}}
          />
          <View style={styles.box}>
              <View style={styles.name}>
                  <Text>name</Text>
                  <TextInput
                      style={styles.InputText}
                      onChangeText={(text) => this.setState({nameText:text})}
                      value={this.state.nameText}
                  />
                  <Text>password</Text>
                  <TextInput
                      style={styles.InputText}
                      onChangeText={(text) => this.setState({passwordText:text})}
                      value={this.state.passwordText}
                  />
              </View>

          </View>

          <TouchableOpacity
              style={styles.item}
              onPress={this.onButtonPress}
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
    item: {
        // flex: 1,
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
        // flex: 1,
        alignItems: 'center',
        width: 250,
        height: 60,
    },
    box: {
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
    },
    name: {
        width: 220,
        height: 70,
        flexDirection: 'row',
        flexWrap:'wrap',
        justifyContent: 'space-between',
        alignItems: 'center',
        alignContent: 'space-between',
    }
})

