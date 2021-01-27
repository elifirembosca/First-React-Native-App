import React, {Component} from 'react';
import {ScrollView, StyleSheet, Text, View} from 'react-native';
import Header from '../components/Header';
import LaunchList from '../components/LaunchList';

export default class LaunchScreen extends React.Component {
  render() {
    return (
      <View>
        <View>
          <Header navigation={this.props.navigation}></Header>
        </View>
        <View style={{marginTop: 20}}>
          <LaunchList navigation={this.props.navigation} ></LaunchList>
        </View>
      </View>
    );
  }
}
