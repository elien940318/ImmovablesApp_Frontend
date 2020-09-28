import React, { Component, useState } from 'react';
import {StyleSheet} from "react-native";

const styles = StyleSheet.create({
    container: {
        flex:1,
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
    },
    biddingbutton:{
      height:'10%', 
      justifyContent: 'center', 
      alignItems:'center', 
      backgroundColor:'#FF5C3B'
    },
    biddingfont:{
      color:'white', 
      fontWeight:'bold', 
      fontSize:20
    },
    heartback:{
      flexDirection:'row',
      backgroundColor:'white',
      justifyContent:'flex-end',

    },
    heartbuttonon:{
      margin:5,
      color:'#FF5C3B',
      borderColor:'black'
    },
    heartbuttonoff:{
      width:25,
      height:30,       
    },
    heartradiusoff:{
      margin:5,
      height:40,
      width:40,
      borderWidth:2, 
      borderRadius:100, 
      alignItems:'center', 
      justifyContent:'center'
    },
    heartradiuson:{
      margin:5,
      height:40,
      width:40,
      borderWidth:2, 
      borderRadius:100, 
      borderColor:'#FF5C3B',
      alignItems:'center', 
      justifyContent:'center'
    },
    convenientView:{
      flexDirection:'row',
      margin:5

    },
    convenientText:{
      margin:2
    },
    describeback:{
      justifyContent:'center',
      alignItems:'center',
      backgroundColor:'white'
    },
  });
  export default styles;