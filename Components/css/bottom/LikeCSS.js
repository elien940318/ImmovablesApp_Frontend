import React, { Component, useState } from 'react';
import {StyleSheet} from "react-native";

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white'
        
     //   alignItems: 'center', //글자 수직 정렬
     //   justifyContent: 'center', //글자 수평 정렬
    },
    TextStyle: {
      textDecorationLine: 'underline',
      //line-through is the trick
    },
});
export default styles;