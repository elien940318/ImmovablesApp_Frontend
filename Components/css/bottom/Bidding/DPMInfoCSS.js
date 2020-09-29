import React, { Component } from 'react';
import {StyleSheet} from "react-native";

const styles = StyleSheet.create({
    EntireBox:{
        flex:1, 
        borderWidth:0.5,
        width:'90%',
        borderColor:'#a7a7a7'
    },
    LeftBox:{ 
        width:'30%', 
        backgroundColor:'whitesmoke', 
        borderBottomWidth:1, 
        borderBottomColor:'#a7a7a7a7'
    },
    RightBox:{ 
        width:'70%',
        backgroundColor:'white', 
        borderBottomWidth:1,
        borderRightWidth:1,
        borderRightColor:'#a7a7a7a7', 
        borderBottomColor:'#a7a7a7a7'
    },
    ConText:{
        color:'#FF5C3B'
    }
});
export default styles;