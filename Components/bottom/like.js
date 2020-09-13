import React, { Component } from 'react';
import { StyleSheet, Text, View, ScrollView, TouchableOpacity} from 'react-native';
import { Container, Content,Icon, Header,Button,Card, CardItem} from 'native-base';
import { createAppContainer } from 'react-navigation'
import {createMaterialTopTabNavigator } from 'react-navigation-tabs'
import { TabViewAnimated, TabBar, SceneMap } from 'react-native-tab-view';

import CardComponent  from '../CardComponent'; 
import RecentR from '../LikeTab/RecentR';
import RecentT from '../LikeTab/RecentT';
import ContectedO from '../LikeTab/ContectedO';
import SubsT from '../LikeTab/SubsT';
import SubsR from '../LikeTab/SubsR';

/*const AppTabNavigator = createMaterialTopTabNavigator({
  본방 : {screen: RecentR},
  본단지: {screen: RecentT},
  찜한방: {screen: SubsR},
  찜한단지: {screen: SubsT},
  부동산: {screen: ContectedO}
}, {
animationEnabled: true,
swipeEnabled: true,
tabBarPosition: "top",
tabBarOptions: {
 /* style : {
   
    backgroundColor:'white',
  },
  iconStyle: {height:30},
  activeTintColor:'#000',
  inactiveTintColor:'#d1cece',
  upperCaseLabel: false,
  showLabel: true,
  showIcon:true,
}
}); 


const AppTabContainet = createAppContainer(AppTabNavigator);
*/
export default class home extends Component {

      state = {
        feeds: [],
        activeIndex: 0,

    }
    
    segmentClicked = (activeIndex) => {
      this.setState({ 
        activeIndex 
      });
  }

  renderSection = () => {
    if(this.state.activeIndex === 0) {
        return  <ScrollView>
                  {this.state.feeds.map(feed => (
                    <CardComponent data={ feed } key={feed.url}/>
                  ))}
                </ScrollView>
    }
    else if(this.state.activeIndex === 1) {
      return <View><Text>This is fissdsdction</Text></View>
  }
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
    static navigationOptions = {
        tabBarIcon: ({tintColor}) => (
            <Icon name='ios-home' style={{color: tintColor}}/>
        )
    }
          //tabbar에 스크롤 제거, touchableopacity클릭시 하단부 밑줄, 안드로이드 작동 확인
    render() {
        return (          
          <Container style={style.container }>
              <Header style ={{ height:100, flexDirection: 'column', backgroundColor: 'white' }}>
                <View style={{ height:45, alignItems: 'center', justifyContent: 'center'}} >
                  <Text style={{ alignItems:'center' }}>관심목록</Text>
                </View>
                <View style={{height:45,}}>
                    <ScrollView horizontal={true}>
                      <View style={{ flexDirection: 'row', justifyContent:'space-around', }}>
                        <TouchableOpacity style={[ this.state.activeIndex === 0 ? {height:40,borderBottomWidth:2} :{height:40}], { padding: 15, backgroundColor:'string', flexDirection: 'row'}}
                          onPress={() => this.segmentClicked(0)}
                          active={this.state.activeIndex === 0}>
                            <Text style={[ this.state.activeIndex === 0 ? {} : {color: 'grey'} ]}>최근 본 방</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={[ this.state.activeIndex === 1 ? {height:40, borderBottomWidth:2} :{height:40}], { padding: 15, backgroundColor:'string', flexDirection: 'row'}}
                          onPress={() => this.segmentClicked(1)}
                          active={this.state.activeIndex === 1}>
                            <Text style={ [ this.state.activeIndex === 1 ? {} : {color: 'grey'} ]}>최근 본 단지</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={[ this.state.activeIndex === 2 ? {height:40, borderBottomWidth:2} :{height:40}], { padding: 15, backgroundColor:'string', flexDirection: 'row'}}
                          onPress={() => this.segmentClicked(2)}
                          active={this.state.activeIndex === 2}>
                            <Text style={[ this.state.activeIndex === 2 ? {} : {color: 'grey'} ]}>찜한 방</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={[ this.state.activeIndex === 3 ? {height:40, borderBottomWidth:2} :{height:40}], { padding: 15, backgroundColor:'string', flexDirection: 'row'}}
                          onPress={() => this.segmentClicked(3)}
                          active={this.state.activeIndex === 3}>
                            <Text style={[ this.state.activeIndex === 3 ? {} : {color: 'grey'} ]}>찜한 단지</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={[ this.state.activeIndex === 4 ? {height:40, borderBottomWidth:2} :{height:40}], { padding: 15, backgroundColor:'string', flexDirection: 'row'}}
                          onPress={() => this.segmentClicked(4)}
                          active={this.state.activeIndex === 4}>
                            <Text style={[ this.state.activeIndex === 4 ? {} : {color: 'grey'} ]}>연락한 부동산</Text>
                        </TouchableOpacity>
                      </View>
                    </ScrollView>
                 
                </View>
              </Header>
              { this.renderSection() }

            <Content>
              
                
            </Content>
          </Container>
        );
      }
}
 
const style = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white'
        
     //   alignItems: 'center', //글자 수직 정렬
     //   justifyContent: 'center', //글자 수평 정렬
    },
    TextStyle: {
      textDecorationLine: 'underline',
      //line-through is the trick
    },
});