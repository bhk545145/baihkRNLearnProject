import React, { Component } from 'react';
import { AppRegistry,StyleSheet,Image, Text,View} from 'react-native';

var REQUEST_URL = 'http://latiao.izanpin.com/api/article/timeline/1/1';

const styles = StyleSheet.create({
    container:{
        flex:1,flexDirection:'row',justifyContent:'center',alignItems:'center',backgroundColor:'#F5FCFF'
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
});

export default class ReactNativeTest extends Component
{
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
        var list = this.state.list[0];
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
                    正在加载电影数据......
                </Text>
            </View>
        );
    }

    renderMovie(list)
    {
        return (
            <View style={styles.container}>
                <Image source={{uri:list.authorAvatar}}
                       style={styles.thumbnail} />
                <View style={styles.rightContainer}>
                    <Text style={styles.title}>{list.authorName}</Text>
                    <Text style={styles.year}>{list.authorId}</Text>
                </View>
            </View>
        );
    }
}


