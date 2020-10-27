import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { createAppContainer} from 'react-navigation';
import { createStackNavigator} from 'react-navigation-stack'
import firebase from 'firebase'

class tokenChecker extends Component 
{
    tokenCheck = () => {
        var user = firebase.auth().currentUser;
        var name, email, uid, emailVerified;
        if (user) {
          // User is signed in.
          name = user.displayName;
          email = user.email;
          emailVerified = user.emailVerified;
          uid = user.uid;
        } else {
          // No user is signed in.
          this.props.navigation.navigate('LoginScreen');
        }
    }
}


export default tokenChecker;