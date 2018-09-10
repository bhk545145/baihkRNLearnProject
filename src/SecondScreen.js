import React, { Component } from 'react';
import {AppRegistry, StyleSheet, Image, Text, View, FlatList, TouchableHighlight, Platform,SeparatorComponent} from 'react-native';

var REQUEST_URL = 'http://latiao.izanpin.com/api/article/joke/1/100';

const styles = StyleSheet.create({
    container:{
        flex:1,flexDirection:'row',justifyContent:'center',alignItems:'flex-start',backgroundColor:'#F5FCFF'
    },
    thumbnail:{
        width:100,height:80
    },
    rightContainer:{
        flex:1
    },
    title:{
        fontSize:20,marginBottom:8,textAlign:'center'
    },
    year:{
        textAlign:'center'
    },
    Nameitem: {
        padding: 10,
        fontSize: 18,
        height: 30,
    },
    contentitem: {
        padding: 10,
        fontSize: 12,
        height: 60,
    },
});

export default class ReactNativeTest extends Component
{
    static navigationOptions = {
        title: '网络请求',
    };
    constructor(props) {
        super(props);

        this.state = {
            list: null,
        };
    }

    render()
    {
        if (!this.state.list) {
            return this.renderLoadingView();
        }
        var list = this.state.list;
        return this.renderMovie(list);
    }

    fetchData()
    {
        fetch(REQUEST_URL, {
            method: 'GET'
        })
            .then((response) => response.json())
            .then((responseData) => {
                this.setState({
                    list:responseData.list,
                });

            })
            .catch((error) => {
                callback(error);
            });
    }

    componentDidMount()
    {
        this.fetchData();
    }

    renderLoadingView()
    {
        return (
            <View style={styles.container}>
                <Text>
                    正在加载辣条数据......
                </Text>
            </View>
        );
    }

    renderMovie(list)
    {
        console.log(list);
        return (
            <View style={styles.container}>
                <FlatList
                    ItemSeparatorComponent={SeparatorComponent}
                    data={list}
                    renderItem={({item, separators}) => (
                        <TouchableHighlight
                            onPress={() => this.fetchData()}
                            onShowUnderlay={separators.highlight}
                            onHideUnderlay={separators.unhighlight}>
                            <View style={{backgroundColor: 'white'}}>
                                <Text style={styles.Nameitem}>{item.authorName}</Text>
                                <Text style={styles.contentitem}>{item.content}</Text>
                            </View>
                        </TouchableHighlight>
                    )}
                />
            </View>
        );
    }
}


