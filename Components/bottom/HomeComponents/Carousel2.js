import * as React from 'react';
import {
  Text, 
  View,
  SafeAreaView,
  Dimensions } from 'react-native';

import Carousel from 'react-native-snap-carousel';


const SLIDER_WIDTH = Dimensions.get('window').width;
const ITEM_WIDTH = Math.round(SLIDER_WIDTH * 0.7);
const ITEM_HEIGHT = Math.round(ITEM_WIDTH * 3 / 4);

export default class Carousel2 extends React.Component {

 
    constructor(props){
        super(props);
        this.state = {
          activeIndex:0,
          carouselItems: props.data
      }
    }

    _renderItem({item,index}){
        return (
          <View style={{
              backgroundColor:'floralwhite',
              borderRadius: 5,
              height: ITEM_HEIGHT,
              padding: 50,
              marginLeft: 25,
              marginRight: 25, }}>
            <Text style={{fontSize: 30}}>{item.title}</Text>
          </View>

        )
    }

    render() {
        return (
          <SafeAreaView style={{backgroundColor:'white', paddingTop: '5%', paddingBottom:'10%' }}>
            <View style={{ flex: 1, flexDirection:'row', justifyContent: 'center', }}>
                <Carousel
                  layout={"tinder"}
                  layoutCardOffset={9}
                  ref={ref => this.carousel = ref}
                  data={this.state.carouselItems}
                  sliderWidth={SLIDER_WIDTH}
                  itemWidth={300}
                  renderItem={this._renderItem}
                  onSnapToItem = { index => this.setState({activeIndex:index}) } />
            </View>
          </SafeAreaView>
        );
    }
}

