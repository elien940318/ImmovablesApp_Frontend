import React, { Component, useState } from 'react';
import {StyleSheet, Dimensions} from "react-native";

const SLIDER_WIDTH = Dimensions.get('window').width;
const ITEM_WIDTH = Math.round(SLIDER_WIDTH *0.9);
const ITEM_HEIGHT = Math.round(ITEM_WIDTH/0.9*0.7 * 3 / 4);

const styles = StyleSheet.create({
    carouselContainer: {
      marginTop: 10
    },
    itemContainer: {
      width: ITEM_WIDTH,
      height: ITEM_HEIGHT,
      },
    itemLabel: {
      color: 'black',
      fontSize: 20,
    },
    counter: {
      marginTop: 25,
      fontSize: 30,
      fontWeight: 'bold',
      textAlign: 'center'
    }
  });
  
  export default styles;