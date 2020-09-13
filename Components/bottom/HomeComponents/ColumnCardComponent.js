import React, { Component } from 'react';
import Carousel from 'react-native-snap-carousel';
import { View, Image, Text, Dimensions, StyleSheet } from 'react-native';
import { Card, CardItem, Thumbnail, Body, Left, Right, Button, Icon, G, Grid } from 'native-base';
import { scrollInterpolator, animatedStyles } from '../../Util/HomeUtil/animation'

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
        this._renderItem = this._renderItem.bind(this)  
        this.state={
            mydata: this.props.data
        }      
      }
      
      _renderItem({ item }) {
        return (
          <View style={styles.itemContainer}>
            <Text style={styles.itemLabel}>{item.title}</Text>
            <Text>{item.author}</Text>
            {
                item.content.replace(/\n/g,' ').slice(0, 15).length>=11 ?
                    <Text> 
                    {item.content.replace(/\n/g,' ').slice(0, 15) }...
                    </Text> 
                : <Text> 
                    {item.content.replace(/\n/g,' ').slice(0, 11) }
                 </Text>
            }
            <Text></Text>
            <Text>{item.price}</Text>
          </View>
        );
      }
      
      render() {
        return (
          <View>
            <Carousel
              ref={(c) => this.carousel = c}
              data={this.state.mydata}
              renderItem={this._renderItem}
              sliderWidth={SLIDER_WIDTH}
              itemWidth={ITEM_WIDTH}
              containerCustomStyle={styles.carouselContainer}
              inactiveSlideShift={0}
              onSnapToItem={(index) => this.setState({ index })}
              scrollInterpolator={scrollInterpolator}
              slideInterpolatedStyle={animatedStyles}
              useScrollView={true}          
            />
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
  