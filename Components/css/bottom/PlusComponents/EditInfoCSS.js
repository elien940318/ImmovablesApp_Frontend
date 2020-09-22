import React, { Component, useState } from 'react';
import {StyleSheet} from "react-native";

const styles = StyleSheet.create({
    container: {
        flex:1
    },
    background:{
        justifyContent:'center', 
        alignItems:'center',
        width: 300, 
        height: 150, 
        borderWidth:2, 
        borderColor:'#a7a7a7', 
        borderRadius:5, 
        backgroundColor:'#c0c0c0'
    },
    pw:{
        justifyContent:'center', 
        alignItems:'center',
        width: 250, 
        height: 30, 
        borderWidth:2, 
        borderColor:'#a7a7a7', 
        borderRadius:5,   
    }

});

export default styles;