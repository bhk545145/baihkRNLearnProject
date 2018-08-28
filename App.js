import React, {Component} from "react";
import {Image} from 'react-native';
import { createStackNavigator,createBottomTabNavigator,createSwitchNavigator } from 'react-navigation';
// 自定义组件
import HomeScreen from './HomeScreen';
import FirstScreen from './FirstScreen';
import SecondScreen from './SecondScreen';
import LoginScreen from './Login';
export default class FSMain extends Component {
    constructor(props) {
        super(props);
        this.state = {
            text: '111'
        };
    }

    render() {
        return (
            <SwitchNavigator />
        );
    }
}


//createBottomTabNavigator 底部TabBar
const BottomTabNavigator = createBottomTabNavigator(
    {
        Home: {
            screen: HomeScreen,
            navigationOptions: {
                tabBarLabel: "首页",
                tabBarIcon: ({ tintColor, focused }) => (
                    <Image resizeMode='contain'
                           source={require( './app/images/addressbook.png')}
                           style={[{tintColor: tintColor,width:30}]}
                    />
                ),
            },
        },

        firstScreen: {
            screen: FirstScreen,
            navigationOptions: {
                tabBarLabel: "CC",
                tabBarIcon: ({ tintColor, focused }) => (
                    <Image resizeMode='contain'
                           source={require( './app/images/addressbook.png')}
                           style={[{tintColor: tintColor,width:30}]}
                    />
                ),
            },
        },

        secondScreen: {
            screen: SecondScreen,
            navigationOptions: {
                tabBarLabel: "DD",
                tabBarIcon: ({ tintColor, focused }) => (
                    <Image resizeMode='contain'
                           source={require( './app/images/addressbook.png')}
                           style={[{tintColor: tintColor,width:30}]}
                    />
                ),
            },
        },

        My: {
            screen: LoginScreen,
            navigationOptions: {
                tabBarLabel: "我的",
                tabBarIcon: ({ tintColor, focused }) => (
                    <Image resizeMode='contain'
                           source={require( './app/images/addressbook.png')}
                           style={[{tintColor: tintColor,width:30}]}
                    />
                ),

            }
        },
    },

    {
        // 初始化哪个界面为显示的第一个界面，如果不配置，默认使用RouteConfigs中的第一个页面当做根界面
        initialRouteName: "Home",
        lazy: true,
        tabBarOptions: {
            inactiveTintColor: "#8F8F8F",
            activeTintColor: "#ED5601",
            showIcon:"true",
            labelStyle: {
                fontSize: 11
            }
        }
    }
);

//createStackNavigator 顶部导航栏
const StackNavigator = createStackNavigator(
    {
        Home: {
            screen: BottomTabNavigator,
        },
    },

    {
        // 初始化哪个界面为显示的第一个界面，如果不配置，默认使用RouteConfigs中的第一个页面当做根界面
        initialRouteName: "Home",
        lazy: true,
        navigationOptions: {
            // headerTitle: "首页",
        }

    }
);

const SwitchNavigator = createSwitchNavigator(
    {
        Home: {
            screen: BottomTabNavigator,
        },
        Login: {
            screen: LoginScreen,
        },
    },

    {
        // 初始化哪个界面为显示的第一个界面，如果不配置，默认使用RouteConfigs中的第一个页面当做根界面
        initialRouteName: "Home",
    }
)