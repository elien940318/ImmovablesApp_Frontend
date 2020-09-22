import React, { Component, useState } from 'react';
import {StyleSheet} from "react-native";


const styles = StyleSheet.create({
    container: {
        flex:1,
        justifyContent:'center',
        alignItems:'center'
    },
    red: {
        backgroundColor: '#004aff',
        alignItems: 'center',
        padding: 10,
      },
      button: {
        alignItems: 'center',
        backgroundColor: '#DDDDDD',
        padding: 10,
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
      borderWidth:0.5, 
      borderRadius:5, 
      justifyContent:'center', 
      alignItems:'center',
      backgroundColor:'#004aff'
    },
    offtypebutton:{
      color:'#000', 
      width:'90%', 
      height:40, 
      borderWidth:0.5, 
      borderRadius:5, 
      justifyContent:'center', 
      alignItems:'center',
      
    }
});

export default styles;