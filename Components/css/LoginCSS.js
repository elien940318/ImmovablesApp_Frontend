const { fetchUpdateAsync } = require("expo/build/Updates/Updates");
import React, { Component, useState } from 'react';
import {StyleSheet} from "react-native";

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: 'white',
      alignItems:'center',
      backgroundColor:'#FFFBE1'
    },
    header: {
      width:'100%',
      height:'20%',
      justifyContent: 'center',
      alignItems: 'center',
      //backgroundColor: '#24BD64',
    },
    title: {
      width:'85%',
      height:'65%',
      justifyContent: 'center',
      alignItems: 'center',
      //backgroundColor:'#667C68'
    },
    content: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
     // backgroundColor: '#94c4d2',
    },
    footer: {
      flex: 1,
      width: '100%',
      height: 50,
     // backgroundColor: '#94c4d2',
    },
    searchSection: {
      flexDirection: 'row',
      width:'90%',
      justifyContent: 'space-between',
      alignItems: 'center',
      borderBottomWidth:1,
      borderColor:'#666666'
  },
  });
  export default styles;
