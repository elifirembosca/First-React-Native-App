//import liraries
import React, {Component} from 'react';
import {View, Text, StyleSheet} from 'react-native';
import LaunchScreen from './screens/LaunchScreen';
import LoginScreen from './screens/LoginScreen';
import SignUpScreen from './screens/SignUpScreen';
import DetailScreen from './screens/DetailScreen';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';

// create a component
class App extends Component {
  render() {
    const Stack = createStackNavigator();
    return (
      <View style={styles.container}>
        <NavigationContainer>
          <Stack.Navigator
            screenOptions={{
              headerShown: false,
            }}>
            <Stack.Screen name="LoginScreen" component={LoginScreen} />
            <Stack.Screen name="SignUpScreen" component={SignUpScreen} />
            <Stack.Screen name="LaunchScreen" component={LaunchScreen} />
            <Stack.Screen name="DetailScreen" component={DetailScreen} />
          </Stack.Navigator>
        </NavigationContainer>
      </View>
    );
  }
}

// define your styles
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

//make this component available to the app
export default App;
