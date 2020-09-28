import React, {Component} from 'react';
import { StyleSheet, Text, View, Platform } from 'react-native';
import { Icon } from 'native-base';
//import { createAppContainer } from 'react-navigation'
//import {createMaterialTopTabNavigator } from 'react-navigation-tabs'
import firebase from 'firebase';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import home from './bottom/HomeComponents/Home'
import like from './bottom/LikeComponents/like'
import map from './bottom/Map'
import Board from './bottom/Bidding/Board'
import plus from './bottom/PlusComponents/plus'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';

const AppTabContainet = createBottomTabNavigator();

export default class MainScreen extends Component {
  // navigationOptions 코드 추가
  static navigationOptions = {
    //headerLeft: <Icon name='ios-camera' style={{ paddingLeft:10 }}/>,
    //headerRight: <Icon name='ios-send' style={{ paddingRight:10 }}/>,
    headerShown: false
  }

  render() {
    return (
      <NavigationContainer>
        <AppTabContainet.Navigator tabBarOptions={{activeTintColor: '#FF5C3B'}}>
          <AppTabContainet.Screen name="홈" component={home} options={{
          //tabBarLabel: 'Home',
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="home" color={color} size={size} />
          ),
        }}/>
          <AppTabContainet.Screen name="관심목록" component={like} options={{
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="heart" color={color} size={size} />
          ),
        }}/>
          {/* <AppTabContainet.Screen name="지도" component={map} options={{
          //tabBarLabel: 'map',
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="map" color={color} size={size} />
          ),
        }}/> */}
          <AppTabContainet.Screen name="게시판" component={Board}options={{
          //tabBarLabel: 'post',
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="clipboard" color={color} size={size} />
          ),
        }}/>
          <AppTabContainet.Screen name="더보기" component={plus}options={{
          //tabBarLabel: 'Home',
          tabBarIcon: ({ color, size }) => (
            <MaterialIcons name="more-horiz" color={color} size={size} />
          ),
        }}/>
        </AppTabContainet.Navigator>
      </NavigationContainer>
      
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  }
});