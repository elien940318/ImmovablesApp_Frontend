import React, { Component } from 'react';
import Carousel from 'react-native-snap-carousel';
import { View, Text, Dimensions, StyleSheet } from 'react-native';

const SLIDER_WIDTH = Dimensions.get('window').width;
const ITEM_WIDTH = Math.round(SLIDER_WIDTH * 0.7);
const ITEM_HEIGHT = Math.round(ITEM_WIDTH * 3 / 4);

const DATA = [];
for (let i = 0; i < 10; i++) {
  DATA.push(i)
} 

export default class ColumnCardComponent extends Component {
       
         
    constructor(props) {
        super(props);
        this.state={
            mydata: this.props.data
        }      
      }
      
      _renderItem({ item }) {
        return (
          <View >
            <Text >{item.id}</Text>
            <Text>{item.pw}</Text>
          </View>
        );
      }
      
      render() {
        return (
          <View>

              data={this.state.mydata}
              renderItem={this._renderItem}
            
          </View>
        );
      }
  }
  
  
  const styles = StyleSheet.create({
    carouselContainer: {
      marginTop: 10
    },
    itemContainer: {
      width: ITEM_WIDTH,
      height: ITEM_HEIGHT,
      alignItems: 'center',
      justifyContent: 'center',
      backgroundColor: 'white'
    },
    itemLabel: {
      color: 'black',
      fontSize: 24
    },
    counter: {
      marginTop: 25,
      fontSize: 30,
      fontWeight: 'bold',
      textAlign: 'center'
    }
  });
  