import React, { Component } from 'react';
import { StyleSheet, Text, View, ScrollView, TouchableOpacity} from 'react-native';
import { Container, Content,Icon, Header,Button,Card, CardItem} from 'native-base';
// import { createAppContainer } from 'react-navigation'
// import {createMaterialTopTabNavigator } from 'react-navigation-tabs'
// import { TabViewAnimated, TabBar, SceneMap } from 'react-native-tab-view';

import RecentR from './LikeTab/RecentR';
import RecentT from './LikeTab/RecentT';
import ContectedO from './LikeTab/ContectedO';
import SubsT from './LikeTab/SubsT';
import SubsR from './LikeTab/SubsR';
import styles from '../../css/bottom/LikeCSS.js'

import firebase from 'firebase';

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
    activeIndex: 0,
    uid: '103842694532689299916',
    email: 'changkeereum@gmail.com',
  }

  componentDidMount ()
  {    
    // 빌드시 주석 풀것... oauth 기능 빌드후 작동하므로...
    // firebase.auth().onAuthStateChanged(user => {
    //   if(user) {
    //       this.setState({uid: user.uid}); 
    //       this.setState({email: user.email}); 
    //   }
    //   else {
    //       alert("firebase로부터 user profile 가져오는 중 오류 발생.");
    //   }
    // });
  }
  
  segmentClicked = (activeIndex) => {
    this.setState({ activeIndex });
  }

  renderSection = () => {
    if(this.state.activeIndex === 0) {
      return <RecentR data={this.state.email}></RecentR>
    }
    else if(this.state.activeIndex === 1) {
      return <SubsR data={this.state.email}></SubsR>
    }
  }


  static navigationOptions = {
      tabBarIcon: ({tintColor}) => (
          <Icon name='ios-home' style={{color: tintColor}}/>
      )
  }
        //tabbar에 스크롤 제거, touchableopacity클릭시 하단부 밑줄, 안드로이드 작동 확인
  render() {
    return (          
      <Container style={styles.container }>
          <Header style ={{ height:100, flexDirection: 'column', backgroundColor: 'white' }}>
            
            <View style={{ height:45, alignItems: 'center', justifyContent: 'center'}} >
              <Text style={{ alignItems:'center' }}>관심목록</Text>
            </View>

            <View style={{height:45,}}>
              <View style={{ flexDirection: 'row', justifyContent:'space-around', }}>
                <TouchableOpacity style={[ this.state.activeIndex === 0 ? {height:40,borderBottomWidth:2} :{height:40}], { padding: 15, backgroundColor:'string', flexDirection: 'row'}}
                  onPress={() => this.segmentClicked(0)}
                  active={this.state.activeIndex === 0}>
                    <Text style={[ this.state.activeIndex === 0 ? {color: 'red'} : {color: 'black'} ]}>최근 본 방</Text>
                </TouchableOpacity>
                <TouchableOpacity style={[ this.state.activeIndex === 1 ? {height:40} :{height:40}], { padding: 15, backgroundColor:'string', flexDirection: 'row'}}
                  onPress={() => this.segmentClicked(1)}
                  active={this.state.activeIndex === 1}>
                    <Text style={[ this.state.activeIndex === 1 ? {color: 'red'} : {color: 'black'} ]}>찜한 방</Text>
                </TouchableOpacity>
              </View>
            </View>
          </Header>

          <ScrollView>            
          {
            this.renderSection()
          }
          </ScrollView>          
      </Container>
    );
  }
}
 
