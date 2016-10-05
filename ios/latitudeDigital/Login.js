import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  NavigatorIOS,
  TouchableOpacity,
  TextInput
} from 'react-native';

const Admin = require('./Admin');

class Login extends Component {
  constructor(props){
    super(props);
    this.state = {
      text: 'user'
    }
  }
  _onPress(){
    this.props.navigator.push({
      title: 'Admin',
      component: Admin,
      passProps: { name: this.state.text }
    });
  }
  render (){
    return(
      <View style={styles.container}>
      <TextInput style={styles.textInput} onChangeText={(text) => this.setState({text})}
        value={this.state.text}/>
      <TextInput style={styles.textInput} secureTextEntry={true}/>
      <TouchableOpacity style={styles.button} onPress={() => this._onPress()}>
        <Text style={styles.buttonText}>Validate</Text>
      </TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'hsl(198, 13%, 23%)'
  },
  textInput: {
    backgroundColor: '#FFF',
    textAlign: 'left',
    alignSelf: 'center',
    color: '#333333',
    height: 50,
    width: 250,
    marginBottom: 5,
    paddingLeft: 5
  },
  button: {
    backgroundColor: '#FFF',
    width: 250,
    height: 50,
    marginTop: 10
  },
  buttonText: {
    textAlign: 'center',
    paddingTop: 12,
    fontSize: 18,
    color: 'hsl(198, 13%, 23%)',
    fontWeight: '700'
  }
});

module.exports = Login;
