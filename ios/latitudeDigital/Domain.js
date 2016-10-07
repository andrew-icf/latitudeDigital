import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  NavigatorIOS,
  TouchableOpacity,
  TextInput,
  Switch
} from 'react-native';


class Domain extends Component{
  constructor(props){
    super(props);
    this.state = {
      notYou: 'Is this not you',
      event: 'Event',
      trueSwitchIsOn: true,
      falseSwitchIsOn: false,
      email:'tony@gmail.com',
      phone: 'Phone'
    }
  }

  _onWhen(){
    this.props.navigator.push({
      title: "When do you plan to acquire your next vehicle?",
      component: When
    })
  }

  render(){
    return(
      <View style={styles.container}>
          <TextInput style={styles.textInput} onChangeText = {(email)=> this.setState({email})}
          value={this.state.email}/>
          <TouchableOpacity style={styles.button}>
            <Text style={styles.buttonText}>Quick Domains </Text>
          </TouchableOpacity>
          <Text style={styles.text}>
            <Switch style={styles.domainSwitch}
              onValueChange={(value) => this.setState({falseSwitchIsOn: value})}
              value={this.state.falseSwitchIsOn}
            />
            Please email me communications including product information,
            offers, and incentives from Ford and the local dealers. Is it ok to use your email
            address to contact you?
          </Text>
          <TextInput style={styles.textInput} onChangeText={(phone) => this.setState({phone})}
          value={this.state.phone}/>
          <TouchableOpacity style={styles.button} onPress={() => this._onWhen()}>
            <Text style={styles.buttonText}>Next</Text>
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
  domainSwitch: {
    marginTop: 10,

  },
  text: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 10,
    marginTop: 10,
    fontSize: 12,
    fontWeight: '600',
    width: 350
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


module.exports = Domain;
