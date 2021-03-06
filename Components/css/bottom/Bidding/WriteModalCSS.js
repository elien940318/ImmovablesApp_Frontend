import React, { Component, useState } from 'react';
import {StyleSheet,Dimensions} from "react-native";
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
const SLIDER_WIDTH = Dimensions.get('window').width;
const ITEM_WIDTH = Math.round(SLIDER_WIDTH * 0.7);
const ITEM_HEIGHT = Math.round(ITEM_WIDTH );
const ITEM_WIDTH1 = Math.round(SLIDER_WIDTH);

const styles = StyleSheet.create({
    container: {
        margin:-20,
        backgroundColor: 'white'
      },
      modalheader:{
        backgroundColor: 'white',
        alignItems:'center',
        justifyContent: 'space-between',

      },
      button1:{
        width:'95%',
        justifyContent:'space-around',
        alignItems: 'center',
        borderWidth:1,
        borderColor:'#a7a7a7',
        backgroundColor:'white'    
    },

    button:{
        margin:5,
        width:'95%',
        height:40,
        flexDirection:'row',
        justifyContent:'center',
        alignItems: 'center',
        borderWidth:1,
        borderColor:'#a7a7a7',
        backgroundColor:'white'
        
    },

    facilityButton:{
      margin:5,
      width:'95%',
      height:40,
      flexDirection:'row',
      justifyContent:'center',
      alignItems: 'center',
      borderWidth:1,
      borderColor:'#a7a7a7',
      backgroundColor:'white'
    },
    iteminformation:{
      flex:1,
      height:100,
      width:'100%',
      flexDirection:'row',
      justifyContent:'flex-start',
      alignItems: 'center',
      borderBottomWidth:1,
      borderColor:'#b7b7b7',
  },

    mcontent:{
      height:ITEM_HEIGHT,
      width:'95%',
      justifyContent:'center',
      alignItems: 'center',
      borderWidth:1,
      borderColor:'#EAE9E9',      
    },
    bottomimage:{
      width:'95%',
      flexDirection:'row',
      justifyContent:'flex-start',
      alignItems: 'center',
      borderWidth:1,
      borderColor:'#EAE9E9',      
    },
    bottombutton:{
      width:'46%',
      height: ITEM_HEIGHT/7,
      margin:5,
      flexDirection:'row',
      justifyContent:'center',
      alignItems: 'center',
      borderWidth:1,
      borderColor:'#EAE9E9',      
    },
    bottombutton1:{
      width:'46%',
      height: ITEM_HEIGHT/7,
      margin:5,
      flexDirection:'row',
      justifyContent:'center',
      alignItems: 'center',
      borderWidth:1,
      borderColor:'#EAE9E9',   
      backgroundColor:'#FF5C3B'   
    },
    image: { width: 300, height: 300, backgroundColor: 'gray' },


});
export default styles;