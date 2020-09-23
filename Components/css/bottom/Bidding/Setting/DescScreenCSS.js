import React, { Component, useState } from 'react';
import {StyleSheet} from "react-native";
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';

const styles = StyleSheet.create({
    container:{
      flex:1,
      justifyContent:'center',
      alignItems:'center'
    },
    onbutton:{
      height:50,
      width:95,
      borderRadius:10,
      justifyContent:'center',
      alignItems:'center',
      borderWidth:0.5,
      backgroundColor:'#F88262'
    },
    offbutton:{
      height:50,
      width:95,
      borderRadius:10,
      justifyContent:'center',
      alignItems:'center',
      borderWidth:0.5,
    }
   
  });

  export default styles;