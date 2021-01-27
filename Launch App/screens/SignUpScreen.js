//import liraries
import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import Logo from '../components/Logo';
import NameSurname from '../components/NameSurname';

export default class SignUpScreen extends Component {
    render() {
        return (
            <View style={styles.container}>
            <View style={styles.Container1}>
              <Logo></Logo>
            </View>
            <View style={styles.Container2}>
              <NameSurname navigation={this.props.navigation}></NameSurname>
            </View>
          </View>
        )
    }
}


// define your styles
const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    Container1:{
        flex:0.5,
    },
    Container2:{
        flex:1,
    },

});

