import React, { Component } from 'react';
import { TouchableOpacity,TextInput, StyleSheet, Text, View, Dimensions, ScrollView } from 'react-native';
import {  Container, Content,Icon, Header } from 'native-base'; 
import http from '../../../../http-common.js'
import RowCardComponent from "../../Bidding/RowCardComponent.js"
import RowCardDealComponent from "../../Bidding/RowCardDealComponent.js"

export default class RecentR extends Component {

    state = {
        // feeds: [],
        email: this.props.data,
        idx: 0,
        DB_recentdata1: null,
        DB_recentdata2: null,
        loading: true,
    }
    
    static navigationOptions = {
        tabBarIcon: ({tintColor}) => (
            <Icon name='ios-add-circle' style={{color: tintColor}}/>
        )
    }

    // shouldComponentUpdate(nextProps, nextState){    
    //     console.log("shouldComponentUpdate()");  
    //     return true;
    // }

    componentDidMount() 
    {
        console.log('call componentDidMount()');
        // this.fetchFeeds().then(feeds => {
        //     this.setState({
        //       feeds
        //     })
        // });
        this.getRecentData1();
        this.getRecentData2();

        setTimeout(()=>{
            this.setState({
              loading:false
            })
        }, 2000)
    }

    OptionChanged = (idx) => {      
        this.setState({idx});
        
        if(idx === 0)
            this.getRecentData1();
        else if(idx === 1)
            this.getRecentData2();
    }
    
    getRecentData1() {
        http.post('/like/recentData', {
            _email: this.state.email,
            _option: 0
        })
        .then((response) => {
            this.setState({DB_recentdata1: response.data});
        })
        .catch(function (error) {
            alert("## error: recentData DB접근 오류");
        });
    }

    getRecentData2() {
        http.post('/like/recentData', {
            _email: this.state.email,
            _option: 1
        })
        .then((response) => {
            this.setState({DB_recentdata2: response.data});
        })
        .catch(function (error) {
            alert("## error: recentData DB접근 오류");
        });
    }

    renderSection()
    {      
        if(this.state.idx === 0)
        {
            return(
                this.state.DB_recentdata1.reverse().map((feed, index) => (
                    <RowCardComponent data={ feed } key={index}/>
                ))
            )
        }
        else {
            return(
                this.state.DB_recentdata2.reverse().map((feed, index) => (
                    <RowCardDealComponent data={ feed } key={index}/>
                ))
            )
        }
    }

    // fetchFeeds() {
    //     const data = {
    //         id: 1,
    //         jsonrpc: "2.0",
    //         method: "call",
    //         params: [
    //           "database_api",
    //           "get_discussions_by_created",
    //           [{ tag: "kr", limit: 20 }]
    //         ]
    //     };
    //     return fetch('https://api.steemit.com', {
    //         method: 'POST',
    //         body: JSON.stringify(data)
    //     })
    //     .then(res => res.json())
    //     .then(res => res.result)
    // }

    render() {
        if(this.state.loading)
        {
            return (
                <Text>로딩중 입니다...</Text>
            )
        }
        else
        {                                
            return (
                <View>
                    <View style={{ flexDirection: 'row', justifyContent:'space-around', height:30}}>
                        <TouchableOpacity active={this.state.idx === 0}  
                            style={{height:40, padding: 10, flexDirection: 'row'}}
                            onPress={() => this.OptionChanged(0)}>
                            <Text style={[this.state.idx === 0 ? {color: 'red'} : {color: 'black'}]}>구매희망</Text>
                        </TouchableOpacity>
                        <TouchableOpacity 
                            active={this.state.idx === 1} 
                            style={{height:40, padding: 10, flexDirection: 'row'}}
                            onPress={() => this.OptionChanged(1)}>
                            <Text style={[this.state.idx === 1 ? {color: 'red'} : {color: 'black'}]}>거래</Text>
                        </TouchableOpacity>
                    </View>
                    <ScrollView>                        
                    {   
                        this.renderSection()
                    }
                    </ScrollView>
                </View>
            );            
            
            
        }
    }
}
 
const style = StyleSheet.create({
    container: {
        flex: 1,

    }
});