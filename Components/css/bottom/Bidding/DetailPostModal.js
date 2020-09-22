import React, { Component, useState } from 'react';
import {StyleSheet} from "react-native";

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
      height: 300,
      alignItems:'center',
      justifyContent: 'center',
      backgroundColor: 'white'
    },
    price:{
      alignItems:'center',
      justifyContent: 'center',
      height:'10%',
      backgroundColor: 'white'
    },
    content:{
      alignItems:'center',
      justifyContent: 'center',
      height:'10%',
      backgroundColor: 'white'
    },
    category: {
      width:'100%',
      height: 70,
      flexDirection: 'row',
      justifyContent: 'space-around',
      alignItems: 'center',
      backgroundColor: 'white',
    },
    info:{
      alignItems:'center',
      justifyContent: 'center',
      margin:15,
    },
    hr:{    
      margin:10,
      borderBottomColor: 'gainsboro',
      borderBottomWidth: 1,
    },
    br: {
      height: '10%',
      backgroundColor: 'whitesmoke'
    }
  });
  export default styles;