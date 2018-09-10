import React, {Component} from "react";
import {Image, YellowBox} from 'react-native';
import { createStackNavigator,createBottomTabNavigator,createSwitchNavigator } from 'react-navigation';
// 自定义组件
import HomeScreen from './src/HomeScreen';
import FirstScreen from './src/FirstScreen';
import SecondScreen from './src/SecondScreen';
import LoginScreen from './src/Login';
import DetailsScreen from './src/Details';
import DeviceControllerScreen from './src/DeviceController';

export default class FSMain extends Component {
    constructor(props) {
        super(props);
        this.state = {
            text: '111'
        };
    }

    render() {

        return (

            <BottomTabNavigator />
        );
    }
}

//createStackNavigator 顶部导航栏
const HomeScreenStack = createStackNavigator(
    {
        Home: {
            screen: HomeScreen,
        },
        DeviceController: {
            screen: DeviceControllerScreen,
        }
    },
    {
        initialRouteName: 'Home',
        navigationOptions: {
            headerStyle: {
                backgroundColor: '#ED5601',
            },
            headerTintColor: '#fff',
            headerTitleStyle: {
                fontWeight: 'bold',
            },
        },
    });

const FirstScreenStack = createStackNavigator(
    {
        First: {
            screen: FirstScreen,
        },
    },
    {
        initialRouteName: 'First',
        navigationOptions: {
            headerStyle: {
                backgroundColor: '#ED5601',
            },
            headerTintColor: '#fff',
            headerTitleStyle: {
                fontWeight: 'bold',
            },
        },
    });

const SecondScreenStack = createStackNavigator(
    {
        Second: {
            screen: SecondScreen,
        },
    },
    {
        initialRouteName: 'Second',
        navigationOptions: {
            headerStyle: {
                backgroundColor: '#ED5601',
            },
            headerTintColor: '#fff',
            headerTitleStyle: {
                fontWeight: 'bold',
            },
        },
    });

const LoginScreenStack = createStackNavigator(
    {
        Login: {
            screen: LoginScreen,
        },
        Details:{
            screen: DetailsScreen,
        },
    },
    {
        initialRouteName: 'Login',
        navigationOptions: {
            headerStyle: {
                backgroundColor: '#ED5601',
            },
            headerTintColor: '#fff',
            headerTitleStyle: {
                fontWeight: 'bold',
            },
        },
    });

//隐藏tabbar
LoginScreenStack.navigationOptions = ({ navigation }) => {
    let tabBarVisible = true;
    if (navigation.state.index > 1) {
        tabBarVisible = false;
    }

    return {
        tabBarVisible,
    };
};

//createBottomTabNavigator 底部TabBar
const BottomTabNavigator = createBottomTabNavigator(
    {
        Home: {
            screen: HomeScreenStack,
            navigationOptions: {
                tabBarLabel: "局域网",
                tabBarIcon: ({ tintColor, focused }) => (
                    <Image resizeMode='contain'
                           source={require( './app/images/addressbook.png')}
                           style={[{tintColor: tintColor,width:30}]}
                    />
                ),
            },
        },

        firstScreen: {
            screen: FirstScreenStack,
            navigationOptions: {
                tabBarLabel: "配网",
                tabBarIcon: ({ tintColor, focused }) => (
                    <Image resizeMode='contain'
                           source={require( './app/images/addressbook.png')}
                           style={[{tintColor: tintColor,width:30}]}
                    />
                ),
            },
        },

        secondScreen: {
            screen: SecondScreenStack,
            navigationOptions: {
                tabBarLabel: "网络请求",
                tabBarIcon: ({ tintColor, focused }) => (
                    <Image resizeMode='contain'
                           source={require( './app/images/addressbook.png')}
                           style={[{tintColor: tintColor,width:30}]}
                    />
                ),
            },
        },

        My: {
            screen: LoginScreenStack,
            navigationOptions: {
                tabBarLabel: "账号",
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



// const SwitchNavigator = createSwitchNavigator(
//     {
//         Home: {
//             screen: StackNavigator,
//         },
//         Login: {
//             screen: LoginScreen,
//         },
//     },
//
//     {
//         // 初始化哪个界面为显示的第一个界面，如果不配置，默认使用RouteConfigs中的第一个页面当做根界面
//         initialRouteName: "Home",
//     }
// )