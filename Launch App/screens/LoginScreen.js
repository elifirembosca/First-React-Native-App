//import liraries
import React, {Component} from 'react';
import {View, Text, StyleSheet} from 'react-native';
import Logo from '../components/Logo';
import EmailandPassword from '../components/EmailandPassword';


export default class LoginScreen extends Component {
  render() {
    return (
      <View style={styles.container}>
      <View style={styles.logoContainer}>
        <Logo></Logo>
      </View>
      <View style={styles.EmailandPass}>
        <EmailandPassword navigation={this.props.navigation}></EmailandPassword>
      </View>
    </View>
    )
  }
}

// define your styles
const styles = StyleSheet.create({
  container: {
    flex: 0.8,
    justifyContent: 'center',
    alignItems:'center',
  },
  logoContainer: {
    flex: 1,
  },
  EmailandPass: {
    flex: 1,
  },
});
