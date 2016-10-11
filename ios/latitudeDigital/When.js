import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  NavigatorIOS,
  TouchableOpacity,
  TextInput,
  PickerIOS,
  Switch
} from 'react-native';

const PickerItemIOS = PickerIOS.Item;
function carMake(){
  return ['Acura', 'Audi', 'Buick', 'Cadillac', 'Chevrolet', 'Dodge',
'Ford', 'GM', 'GMC', 'Honda', 'Jeep', 'Kia', 'Nissan', 'Subaru', 'Toyota',
'Volkswagon', 'Volvo'];
};

const time_and_cars = {
  zeroThirty: {
    name: '0-30 days',
    models: carMake(),
  },
  oneThree: {
    name: '1-3 months',
    models: carMake(),
  },
  fourSix: {
    name: '4-6 months',
    models: carMake(),
  },
  sevenPlus: {
    name: '7+ months',
    models: carMake(),
  },
  noPlans: {
    name: 'No definite plans',
    models: carMake(),
  },
};


class When extends Component{
  constructor(props){
    super(props);
    this.state = {
      time: 'zeroThirty',
      modelIndex: 3,
      trueSwitchIsOn1: true,
      falseSwitchIsOn1: false,
      trueSwitchIsOn2: true,
      falseSwitchIsOn2: false,
    };
  }

  render() {
    // const make = time_and_cars[this.state.time];
    // const selectionString = make.name + ' ' + make.models[this.state.modelIndex];
    return (
      <View style={styles.container}>
        <Text style={styles.text}>When do you plan to require your next vehicle?</Text>
        <PickerIOS style={styles.picker}
          selectedValue={this.state.time}
          onValueChange={(time) => this.setState({time, modelIndex: 0})}>
          {Object.keys(time_and_cars).map((time) => (
            <PickerItemIOS
              key={time}
              value={time}
              label={time_and_cars[time].name}
            />
          ))}
        </PickerIOS>
        <PickerIOS style={styles.pickerTwo}
          selectedValue={this.state.modelIndex}
          key={this.state.time}
          onValueChange={(modelIndex) => this.setState({modelIndex})}>
          {time_and_cars[this.state.time].models.map((modelName, modelIndex) => (
            <PickerItemIOS
              key={this.state.time + '_' + modelIndex}
              value={modelIndex}
              label={modelName}
            />
          ))}
        </PickerIOS>
        <Text style={styles.text2}>How do you plan to acquire your next vehicle?</Text>
        <Text style={styles.text}>
          <Switch style={styles.domainSwitch}
            onValueChange={(value) => this.setState({falseSwitchIsOn1: value})}
            value={this.state.falseSwitchIsOn1}
          />
          PURCHASE
        </Text>
        <Text style={styles.text}>
          <Switch style={styles.domainSwitch}
            onValueChange={(value) => this.setState({falseSwitchIsOn2: value})}
            value={this.state.falseSwitchIsOn2}
          />
          LEASE
        </Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
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
    fontSize: 20,
    fontWeight: '600',
    width: 350
  },
  text2: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 10,
    marginTop: 10,
    fontSize: 16,
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
  },
  picker: {
    marginTop: -30
  },
  pickerTwo: {
    marginTop: -50
  }
});


module.exports = When;
