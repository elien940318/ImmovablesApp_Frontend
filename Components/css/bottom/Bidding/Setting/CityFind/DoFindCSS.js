import React, { Component, useState } from 'react';
import {StyleSheet} from "react-native";

const styles = StyleSheet.create({
    container:{
        flex:1,
        
    },
    gridView: {
      marginTop: 0,
      marginBottom: 50,
      flex: 1,
    },
    itemContainer: {
      justifyContent: 'center',
      alignItems:'center',
      padding: 10,
      height: 50,
      borderColor:'black',
      borderWidth:0.5
    },
    itemName: {
      fontSize: 16,
      color: 'black',
      fontWeight: '600',
    },
    itemCode: {
      fontWeight: '600',
      fontSize: 12,
      color: '#fff',
    },
});
export default styles;