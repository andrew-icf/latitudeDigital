import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  NavigatorIOS,
  TouchableOpacity,
  TextInput,
} from 'react-native';

const Survey = require('./Survey');

class Admin extends Component{
  constructor(props){
    super(props);
    this.state = {
      notYou: 'Is this not you',
      event: 'Event'
    }
  }
  _onStartSurvey(){
    this.props.navigator.push({
      title: 'Survey',
      component: Survey
    })
  }
  render(){
    return(
      <View style={styles.container}>
          <Text style={styles.text}>{this.props.name}:</Text>
          <TextInput style={styles.textInput} onChangeText={(notYou) => this.setState({notYou})}
          value={this.state.notYou}/>
          <TextInput style={styles.textInput} value={this.state.event}/>
          <TouchableOpacity style={styles.button} onPress={() => this._onStartSurvey()}>
            <Text style={styles.buttonText}>Start Survey</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.button}>
            <Text style={styles.buttonText}>Connect</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.button}>
            <Text style={styles.buttonText}>Show Schedule</Text>
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
    backgroundColor: '#F5FCFF'
  },
  textInput: {
    backgroundColor: '#FFF',
    textAlign: 'center',
    alignSelf: 'center',
    color: '#333333',
    borderWidth: 1,
    borderColor: '#333',
    height: 50,
    width: 250,
    marginBottom: 5,
  },
  text: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 10,
    marginTop: 10,
    fontSize: 26,
    fontWeight: '600'
  },
  button: {
    backgroundColor: 'hsl(300,5%,20%)',
    width: 250,
    height: 50,
    marginTop: 10
  },
  buttonText: {
    textAlign: 'center',
    paddingTop: 12,
    fontSize: 18,
    color: '#FFF',
    fontWeight: '700'
  }
});


module.exports = Admin;
