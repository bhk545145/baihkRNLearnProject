import React, { Component } from 'react';
import { SectionList, StyleSheet, Text, View, Button, Alert,FlatList,TouchableOpacity } from 'react-native';

const onButtonPress = () => {
    Alert.alert('123');
}

export default class SectionListBasics extends Component {
  render() {
    return (
      <View style={styles.container}>
        <TouchableOpacity
            style={styles.item}
            onPress={onButtonPress}
        >
            <Text>Learn More</Text>
        </TouchableOpacity>
      </View>
        
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 22,
    justifyContent: 'center',
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
    alignItems: 'center',
    backgroundColor:'green',
  },
})