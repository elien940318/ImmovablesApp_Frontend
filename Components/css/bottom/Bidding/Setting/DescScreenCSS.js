import React, { Component, useState } from 'react';
import {StyleSheet} from "react-native";
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';

const styles = StyleSheet.create({
    container:{
      flex:1,
      justifyContent:'center',
      alignItems:'center'
    },
    outline:{ 
      width:'90%', 
      height:'80%', 
      borderWidth:0.5, 
      borderRadius:5, 
      alignItems:'center'
    },
    innerline:{
      justifyContent:'space-between', 
      height:'11%',
      width:'90%', 
      alignItems:'flex-end', 
      flexDirection:'row',
    },
    secondinnerline:{
      justifyContent:'flex-start', 
      height:'27%', 
      width:'90%', 
      alignItems:'flex-end', 
      flexDirection:'row'
    },
    title:{
      height:'10%', 
      alignItems:'center', 
      justifyContent: 'center'
  },
    condiscription:{
      fontWeight:'bold'
    },
    onbutton:{
      height:50,
      width:95,
      borderRadius:10,
      borderColor:'#a7a7a7',
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
    },
    txtpart:{
      flexDirection:'row',
      height:'30%',
      width:'100%', 
      justifyContent: 'center',
      alignItems:'center'
    },
   
  });

  export default styles;