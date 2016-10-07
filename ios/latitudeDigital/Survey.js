import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  NavigatorIOS,
  TouchableOpacity,
  TextInput,
} from 'react-native';

const Domain = require('./Domain');

class Survey extends Component{
  constructor(props){
    super(props);
    this.state = {
      first: 'First Name',
      last: 'Last Name',
      address: 'Address',
      address2: 'Address2',
      zip: 'Zip Code'
    }
  }
_onDomain(){
  this.props.navigator.push({
    title: 'Enter in your Domain',
    component: Domain
  });
}
  render(){
    return(
      <View style={styles.container}>
          <TextInput style={styles.textInput} onChangeText={(first) => this.setState({first})} value={this.state.first} />
          <TextInput style={styles.textInput} onChangeText={(last) => this.setState({last})} value={this.state.last} />
          <TextInput style={styles.textInput} onChangeText={(address) => this.setState({address})} value={this.state.address} />
          <TextInput style={styles.textInput} onChangeText={(address2) => this.setState({address2})} value={this.state.address2} />
          <TextInput style={styles.smallTextInput} onChangeText={(zip) => this.setState({zip})} value={this.state.zip} />
          <TouchableOpacity style={styles.button} onPress={() => this._onDomain()}>
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
    textAlign: 'left',
    paddingLeft: 15,
    alignSelf: 'center',
    color: '#333333',
    borderWidth: 1,
    borderColor: '#333',
    height: 50,
    width: 250,
    marginBottom: 5,
  },
  smallTextInput: {
    backgroundColor: '#FFF',
    textAlign: 'center',
    alignSelf: 'flex-start',
    color: '#333333',
    borderWidth: 1,
    borderColor: '#333',
    height: 50,
    width: 100,
    marginBottom: 5,
    marginLeft: 63
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


module.exports = Survey;
