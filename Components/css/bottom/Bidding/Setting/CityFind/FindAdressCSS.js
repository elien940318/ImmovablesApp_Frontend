import React, { Component, useState } from 'react';
import {StyleSheet} from "react-native";
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';


const styles = StyleSheet.create({
    container:{
        flex:1,
        margin:-18,
    },
    bottombutton:{
        padding : 10,
        height:'80%',
        width:'46%',
        flexDirection:'row',
        justifyContent:'space-between',
        alignItems: 'center',
        borderWidth:1,
        borderRadius : 5,
        borderColor:'#a7a7a7',      
      },
      bottombutton1:{
        padding : 10,
        height:'80%',
        width:'92%',
        flexDirection:'row',
        justifyContent:'space-between',
        alignItems: 'center',
        borderWidth:1,
        borderRadius:5,
        borderColor:'#a7a7a7',      
      },
});

export default styles;