//import liraries
import React, {Component} from 'react';
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity,
} from 'react-native';

// create a component
export default class EmailandPassword extends Component {
  render() {
    return (
      <View style={styles.container}>
        <TextInput placeholder="E-mail" style={styles.input}></TextInput>

        <TextInput placeholder="Password" style={styles.input}></TextInput>

        <TouchableOpacity style={styles.buttonContainer} onPress={()=>this.props.navigation.navigate("LaunchScreen")}>
          <Text style={styles.buttonText}> LOG IN </Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.SignUp} onPress={()=>this.props.navigation.navigate("SignUpScreen")}>
          <Text style={styles.SignUpText}> Sign up </Text>
        </TouchableOpacity>

        <Text style={styles.errorText}></Text>
      </View>
    );
  }
}

// define your styles
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  input: {
    height: 50,
    borderColor: 'grey',
    borderWidth: 2,
    borderRadius: 10,
    marginBottom: 15,
    fontSize: 15,
    padding: 10,
    //width: 300,
  },
  errorText: {
    fontSize: 15,
    color: 'red',
    alignSelf: 'center',
  },
  buttonContainer: {
    height: 60,
    backgroundColor: '#bc2626',
    marginTop: 15,
    borderRadius: 10,
  },
  buttonText: {
    color: 'white',
    fontSize: 18,
    fontWeight: '700',
    textAlign: 'center',
    padding: 18,
  },
  errorText: {
    marginTop: 10,
    alignSelf: 'center',
    color: 'red',
  },
  SignUp: {
   marginTop:10,
   marginLeft:250,
  },
  SignUpText: {
    textDecorationLine: 'underline',
  },
});
