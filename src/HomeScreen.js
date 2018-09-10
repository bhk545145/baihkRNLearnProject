import React,{Component} from 'react';
import DeviceCell from './DeviceCell'
import {View,Text,StyleSheet,Button,StatusBar,Platform,YellowBox,NativeModules} from 'react-native';
import RefreshListView, { RefreshState } from 'react-native-refresh-list-view'
var CalendarManager = NativeModules.CalendarManager;

export default class HomeScreen extends Component {
    keyExtractor = (item: any, index: number) => {
        return index
    }
    static navigationOptions = ({ navigation }) => {
        return {
            title: '局域网',
            headerRight: (
                <Button
                    title="Info"
                    color={Platform.OS === 'ios' ? '#fff' : null}
                />
            ),
        };

    };
    constructor(props) {
        super(props);
        this.state = {
            dataList: [],
        };
    }

    componentDidMount()
    {
        this.onHeaderRefresh();
    }

    onHeaderRefresh = () => {
        this.setState({ refreshState: RefreshState.HeaderRefreshing });
        this.fetchData()
    };

    onFooterRefresh = () => {
        this.setState({ refreshState: RefreshState.FooterRefreshing })
        this.fetchData()
    };

    fetchData()
    {
        probe =	{ };
        CalendarManager.deviceConfig('ScanDevices',JSON.stringify(probe),(error, events) =>{
            if (error) {
                var errors = 'error:' +  error;
                alerter(errors);
                this.setState({ refreshState: RefreshState.Failure });
            } else {
                var data = JSON.parse(events);
                console.log(data.list);
                this.setState({
                    dataList:data.list,
                    refreshState: data.list.length > 50 ? RefreshState.NoMoreData : RefreshState.Idle,
                });
            }
        });

    }

    componentDidMount() {
        this.fetchData();
    }

    render() {
        YellowBox.ignoreWarnings(['Warning: ']);
        return (
            <View style={{flex:1,marginTop: 0,}}>
                {/*/设置状态栏背景色*/}
                <StatusBar
                    barStyle="light-content"
                    backgroundColor="#6a51ae"
                />
                <RefreshListView
                    ItemSeparatorComponent={ItemDivideComponent}
                    keyExtractor={this.keyExtractor}
                    data={this.state.dataList}
                    renderItem={this.renderCell}
                    refreshState={this.state.refreshState}
                    onHeaderRefresh={this.onHeaderRefresh}
                    onFooterRefresh={this.onFooterRefresh}

                    footerRefreshingText='玩命加载中 >.<'
                    footerFailureText='我擦嘞，居然失败了 =.=!'
                    footerNoMoreDataText='-我是有底线的-'
                    footerEmptyDataText='-好像什么东西都没有-'
                />
            </View>

        )
    }

    renderCell = (info: Object) => {
        return <DeviceCell info={info.item} onPress = {this.onButtonPress} />
    }

    onButtonPress = () => {
        this.props.navigation.navigate('DeviceController', {
            titleParam: '设备控制',
        });
    }


}

class ItemDivideComponent extends Component {
    render() {
        return (
            <View style={{height: 1, backgroundColor: '#fbffe7'}}/>
        );
    }
};

const styles = StyleSheet.create({
    container:{
        flex:1,flexDirection:'row',justifyContent:'center',alignItems:'center',backgroundColor:'#F5FCFF'
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
    textItem: {
        width: 300,
    }

});