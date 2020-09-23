import React, { Component, useState } from 'react';
import {StyleSheet} from "react-native";
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';

const styles = StyleSheet.create({
    container: {
        margin:-20,
        backgroundColor: 'whitesmoke'
      },
    header:{
      backgroundColor: 'whitesmoke',
      alignItems:'center',
      justifyContent: 'center',
      flexDirection:'row'
    },
    img:{
      alignItems:'center',
      justifyContent: 'center',
    },
    price:{
      alignItems:'center',
      justifyContent: 'center',
    },
    info:{
      alignItems:'center',
      justifyContent: 'center',
    },
    br: {
      height: '10%',
      backgroundColor: 'whitesmoke'
    }
  
  
  });

export default styles;  