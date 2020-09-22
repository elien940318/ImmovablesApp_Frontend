import React, { Component, useState } from 'react';
import {StyleSheet, Dimensions} from "react-native";
const SLIDER_WIDTH = Dimensions.get('window').width;
const ITEM_WIDTH = Math.round(SLIDER_WIDTH /5);


const styles = StyleSheet.create({
    container: {
        flex: 1,

    },
    chimpormation: {
        width: '20%',
        height: 30,
        justifyContent: 'center',
        backgroundColor:'white',
        borderColor: '#FF5C3B',
        borderWidth: 1
    },
    topbutton: {
        height: 100,
        width: ITEM_WIDTH,
        flexDirection: 'column',
        justifyContent: 'center',
        alignContent: 'center',
        backgroundColor: 'white'
    },

    midview: {
        flexDirection: 'row',
        justifyContent: 'space-around'
    },
    midbutton: {
        padding: 10,
        flex: 1,
        height: 40,
        justifyContent: 'flex-start',
        backgroundColor: 'white'
    },
    bottombutton: {
        backgroundColor: 'white',
        padding: 10
    },

    ImageIconStyle: {
        padding: 10,
        margin: 5,
        height: 25,
        width: 25,
        resizeMode: 'stretch',
      },
      SeparatorLine: {
        backgroundColor: 'black',
        width: 2,
        height: 20,
        alignItems: 'center',
        justifyContent: 'center'
      },
      rowSeparatorLine: {
        backgroundColor: '#d1cece',
        width: '100%',
        height: '0.1%',
        
        
      }
});

export default styles;