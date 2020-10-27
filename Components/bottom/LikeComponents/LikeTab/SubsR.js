
import React, { Component } from 'react';
import { TouchableOpacity,TextInput, StyleSheet, Text, View, Dimensions, ScrollView } from 'react-native';
import {  Container, Content,Icon, Header } from 'native-base';
import http from "../../../../http-common.js";
import RowCardComponent from "../../Bidding/RowCardComponent.js"
import RowCardDealComponent from "../../Bidding/RowCardDealComponent.js"
import firebase from 'firebase';

export default class SubsR extends Component {

    state = {
        // like.js에서 로그인한 회원정보(email)을 가져온다.
        email: 'changkeereum@gmail.com',
        idx: 0,
        DB_likedata1: null,
        DB_likedata2: null,
        loading: true,
    };

    static navigationOptions = {
        tabBarIcon: ({tintColor}) => (
            <Icon name='ios-add-circle' style={{color: tintColor}}/>
        )
    }

    componentDidMount()
    {
        // 현재 로그인되어있는 상태인지 체크한다...
        firebase.auth().onAuthStateChanged(user => {
            if (user) { 
                this.setState({email: user.email})
                this.getLikeData1(user.email)
                this.getLikeData2(user.email)
            }
            else {
                // alert("firebase로부터 user profile 가져오는 중 오류 발생.");
                this.getLikeData1(this.state.email);
                this.getLikeData2(this.state.email);
            }
        });
        setTimeout(()=>{
            this.setState({
              loading:false
            })
        }, 1500)
    }

    OptionChanged = (idx) => {
        this.setState({idx});
        if(idx === 0)
            this.getLikeData2(this.state.email);
        else if(idx === 1)
            this.getLikeData1(this.state.email);
    }

    getLikeData1(email) {
        http.post('/like/likeData', {
            _email: email,
            _option: 0
        })
        .then((response) => {
            this.setState({DB_likedata1: response.data});
        })
        .catch(function (error) {
            alert("## error: likeData DB접근 오류");
        });
    }
    getLikeData2(email) {
        http.post('/like/likeData', {
            _email: email,
            _option: 1
        })
        .then((response) => {
            this.setState({DB_likedata2: response.data});
        })
        .catch(function (error) {
            alert("## error: likeData DB접근 오류");
        });
    }
    renderSection()
    {
        if(this.state.idx === 0)
        {
            return(
                this.state.DB_likedata1.reverse().map((feed, index) => (
                    <RowCardComponent data={ feed } key={index}/>
                ))
            )
        }
        else if(this.state.idx === 1){
            return(
                this.state.DB_likedata2.reverse().map((feed, index) => (
                    <RowCardDealComponent data={ feed } key={index}/>
                ))
            )
        }
    }
    render()
    {
        if(this.state.loading)
        {
            return (
                <Text>로딩중 입니다...</Text>
            )
        }
        else {
            return (
                <View>
                    <View style={{ flexDirection: 'row', justifyContent:'space-around'}}>
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