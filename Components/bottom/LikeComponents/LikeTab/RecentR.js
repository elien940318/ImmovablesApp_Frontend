
import React, { Component } from 'react';
import { StyleSheet, Text, View , ScrollView} from 'react-native';
import {  Container, Content,Icon, Header } from 'native-base'; 
import CardComponent from'../../../CardComponent.js'
export default class RecentR extends Component {

    state = {
        feeds: [],
    }

    componentDidMount() {   //기존함수 componentWillMount에서 componentDidMount로 변경함.
        this.fetchFeeds().then(feeds => {
            this.setState({
              feeds
            })
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