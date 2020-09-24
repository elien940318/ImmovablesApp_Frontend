import React, { Component, useState } from 'react';
import {StyleSheet} from "react-native";


const styles = StyleSheet.create({
    container: {
        flex:1,
        justifyContent:'center',
        alignItems:'center'
    },
    red: {
        backgroundColor: '#F88262',
        alignItems: 'center',
        padding: 10,
      },
      button: {
        alignItems: 'center',
        backgroundColor: '#DDDDDD',
        padding: 10,
        height:'100%',
        
      },
    white: {
        color:'white'
    },
    black:{
        color:'black'
    },
    ontypebutton:{
      color:'#000', 
      width:'90%', 
      height:40, 
      borderWidth:0, 
      borderRadius:5, 
      justifyContent:'center', 
      alignItems:'center',
      backgroundColor:'#FF5C3B'
    },
    offtypebutton:{
      color:'#000', 
      width:'90%', 
      height:40, 
      borderWidth:0.5, 
      borderRadius:5,
      borderColor:'#a7a7a7',
      justifyContent:'center', 
      alignItems:'center', 
    },
    inputbutton:{
      color:'#000',
      width:'90%',
      height:40,
      borderWidth:0.5,
      borderRadius:5,
      borderColor:'#a7a7a7a7',
      justifyContent:'center',
      alignItems:'center',
      backgroundColor:"#FF5C3B"
    },
    pricebutton:{
      color:'#000',
      width:'100%',
      height:40,
      borderWidth:0.5,
      borderRadius:5,
      borderColor:'#a7a7a7a7', 
      justifyContent:'center', 
      alignItems:'center'
    },
    typebutton:{
      width:'90%', 
      height:'9%', 
      justifyContent:'center', 
      borderBottomWidth:0.5}
});

export default styles;