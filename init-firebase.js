import * as React from 'react';
import { Image, Text, View, AsyncStorage, StyleSheet } from 'react-native';
import * as firebase from 'firebase';
import "firebase/auth";

const firebaseConfig = {
    apiKey: "AIzaSyDjzVZ2HFNoBW2BhNXnvHOOuU9tWMjOOuI",
    authDomain: "jipsa-f922c.firebaseapp.com",
    databaseURL: "https://jipsa-f922c.firebaseio.com",
    projectId: "jipsa-f922c",
    storageBucket: "jipsa-f922c.appspot.com",
    messagingSenderId: "sender-id",
    // appId: "1:356463774004:android:9331967b00e7263e89bd61"
};
function initializeFirebase() {
    // Prevent reinitializing the app in snack.
    if (!firebase.apps.length) {
      return firebase.initializeApp(firebaseConfig);
    }
  }
  
  async function signInAsync(token) {
    try {
      if (!token) {
        const token = await getGithubTokenAsync();
        if (token) {
          await AsyncStorage.setItem(GithubStorageKey, token);
          return signInAsync(token);
        } else {
          return;
        }
      }
      const credential = firebase.auth.GithubAuthProvider.credential(token);
      return firebase.auth().signInAndRetrieveDataWithCredential(credential);
    } catch ({ message }) {
      alert(message);
    }
  }
  
  async function signOutAsync() {
    try {
      await AsyncStorage.removeItem(GithubStorageKey);
      await firebase.auth().signOut();
    } catch ({ message }) {
      alert('Error: ' + message);
    }
  }
  
  async function attemptToRestoreAuthAsync() {
    let token = await AsyncStorage.getItem(GithubStorageKey);
    if (token) {
      console.log('Sign in with token', token);
      return signInAsync(token);
    }
  }
  
  export default class App extends React.Component {
    state = { isSignedIn: false };
  
    componentDidMount() {
      this.setupFirebaseAsync();
    }
  
    setupFirebaseAsync = async () => {
      initializeFirebase();
  
      firebase.auth().onAuthStateChanged(async auth => {
        const isSignedIn = !!auth;
        this.setState({ isSignedIn });
        if (!isSignedIn) {
          attemptToRestoreAuthAsync();
        }
      });
    };
  
    render() {
      if (this.state.isSignedIn) {
        const user = firebase.auth().currentUser || {};
  
        return (
          <View style={styles.container}>
            <Image source={{ uri: user.photoURL }} style={styles.image} />
            <Text style={styles.paragraph}>Welcome {user.displayName}</Text>
            <Text style={styles.paragraph} onPress={signOutAsync}>
              Logout
            </Text>
          </View>
        );
      }
      return (
        <View style={styles.container}>
          <GithubButton onPress={() => signInAsync()} />
        </View>
      );
    }
  }
  
  const styles = StyleSheet.create({
    image: {
      width: 128,
      height: 128,
      borderRadius: 64,
      overflow: 'hidden',
      resizeMode: 'contain',
    },
    container: {
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center',
      backgroundColor: '#ecf0f1',
    },
    paragraph: {
      margin: 24,
      fontSize: 18,
      fontWeight: 'bold',
      textAlign: 'center',
      color: '#34495e',
    },
  });
  