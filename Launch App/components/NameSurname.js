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
export default class NameSurname extends Component {
  render() {
    return (
      <View style={styles.container}>
        <TextInput placeholder="Name" style={styles.input}></TextInput>

        <TextInput placeholder="Surname" style={styles.input}></TextInput>

        <TextInput placeholder="E-mail" style={styles.input}></TextInput>

        <TextInput placeholder="Password" style={styles.input}></TextInput>
  
        <TouchableOpacity style={styles.buttonContainer} onPress={()=>this.props.navigation.navigate("LaunchScreen")} >
          <Text style={styles.buttonText}> SIGN UP </Text>
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
  },
  errorText: {
    fontSize: 15,
    color: '#bc2626',
    alignSelf: 'center',
  },
  buttonContainer: {
    height:60,
    width:300,
    backgroundColor: '#bc2626',
    marginTop: 20,
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
});
