import React, { Component } from 'react';
import { StyleSheet, Text, View , ScrollView} from 'react-native';
import {  Container, Content,Icon, Header } from 'native-base'; 
import CardComponent from'../../../CardComponent.js'
import firebase from 'firebase';

export default class RecentR extends Component {

    state = {
        feeds: [],
        uid: null,
        email: null,
    }
    
    getUserProfile()
    {
        firebase.auth().onAuthStateChanged(user => {
            if(user) {
                this.setState({uid: user.uid}); 
                this.setState({email: user.email}); 
            }
            else {
                alert("firebase로부터 user profile 가져오는 중 오류 발생.");
            }
        });
    }

    componentDidMount() {   //기존함수 componentWillMount에서 componentDidMount로 변경함.
        this.fetchFeeds().then(feeds => {
            this.setState({
              feeds
            })
        });
    }

    getRecentData() {
        http.post('/like/recentData', {
            _email: this.state.email,
        })
        .then((response) => {
        if(response.data.values == -1){
            alert(response.data.logs);
        }
        })
        .catch(function (error) {
            
        });
    }

    fetchFeeds() {
        const data = {
            id: 1,
            jsonrpc: "2.0",
            method: "call",
            params: [
              "database_api",
              "get_discussions_by_created",
              [{ tag: "kr", limit: 20 }]
            ]
        };
        return fetch('https://api.steemit.com', {
            method: 'POST',
            body: JSON.stringify(data)
        })
        .then(res => res.json())
        .then(res => res.result)
    }

    render() {
        return (
            <ScrollView>
                  {this.state.feeds.map(feed => (
                    <CardComponent data={ feed } key={feed.url}/>
                  ))}
            </ScrollView>
        );
    }
}
 
const style = StyleSheet.create({
    container: {
        flex: 1,

    }
});