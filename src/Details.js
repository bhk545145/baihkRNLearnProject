import React from 'react';
import { Button, Text, View, StyleSheet, NativeModules,Image } from 'react-native';

var CalendarManager = NativeModules.CalendarManager;

export default class DetailsScreen extends React.Component {
    static navigationOptions = ({ navigation }) => {
        return {
            title: navigation.getParam('titleParam', 'unknow title'),
        };
    };
    constructor(props) {
        super(props);
        this.state = { nickname: '',
        				userId:'',
        				icon:'',	
                     };
    }
    componentDidMount() {
    	this.GetUserInfo();
    }
    GetUserInfo() {
    	//取从上一个界面传递过来的参数
        const { navigation } = this.props;
        const userId = navigation.getParam('userId', 'unknow');
        this.setState({userId:userId});
        params =  {"userId":userId};
    	CalendarManager.accountManagement('GetUserInfo',JSON.stringify(params),(error, events) =>{
            if (error) {
                var errors = 'error:' +  error;
                alerter(errors);
            } else {
            	var data = JSON.parse(events);
                console.log(data); 
                this.setState({nickname:data['nickname']});
                this.setState({icon:data['icon']});
            }
        });
    }
    render() {
        return (
            <View style={styles.mainView}>
	            <Image
	              style={styles.logo}
	              source={{uri: this.state.icon}}
	          	/>
                <Text>userId: {this.state.userId}</Text>
                <Text>nickname: {this.state.nickname} </Text>
            </View>
        );
    }
}

const styles = StyleSheet.create({
	mainView: {
		flex: 1, 
		justifyContent: 'center',
		alignItems: 'center',
	},
    logo: {
        // flex: 1,
        alignItems: 'center',
        width: 250,
        height: 250,
    }
})