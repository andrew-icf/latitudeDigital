import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  NavigatorIOS,
  TouchableOpacity,
  TextInput,
  PickerIOS,
} from 'react-native';

const PickerItemIOS = PickerIOS.Item;

const CAR_MAKES_AND_MODELS = {
  amc: {
    name: 'AMC',
    models: ['AMX', 'Concord', 'Eagle', 'Gremlin', 'Matador', 'Pacer'],
  },
  alfa: {
    name: 'Alfa-Romeo',
    models: ['159', '4C', 'Alfasud', 'Brera', 'GTV6', 'Giulia', 'MiTo', 'Spider'],
  },
  aston: {
    name: 'Aston Martin',
    models: ['DB5', 'DB9', 'DBS', 'Rapide', 'Vanquish', 'Vantage'],
  },
  audi: {
    name: 'Audi',
    models: ['90', '4000', '5000', 'A3', 'A4', 'A5', 'A6', 'A7', 'A8', 'Q5', 'Q7'],
  },
  austin: {
    name: 'Austin',
    models: ['America', 'Maestro', 'Maxi', 'Mini', 'Montego', 'Princess'],
  },
  borgward: {
    name: 'Borgward',
    models: ['Hansa', 'Isabella', 'P100'],
  },
  buick: {
    name: 'Buick',
    models: ['Electra', 'LaCrosse', 'LeSabre', 'Park Avenue', 'Regal',
             'Roadmaster', 'Skylark'],
  },
  cadillac: {
    name: 'Cadillac',
    models: ['Catera', 'Cimarron', 'Eldorado', 'Fleetwood', 'Sedan de Ville'],
  },
  chevrolet: {
    name: 'Chevrolet',
    models: ['Astro', 'Aveo', 'Bel Air', 'Captiva', 'Cavalier', 'Chevelle',
             'Corvair', 'Corvette', 'Cruze', 'Nova', 'SS', 'Vega', 'Volt'],
  },
};


class When extends Component{
  constructor(props){
    super(props);
    this.state = {
      carMake: 'cadillac',
      modelIndex: 3
    };
  }

  render() {
    const make = CAR_MAKES_AND_MODELS[this.state.carMake];
    const selectionString = make.name + ' ' + make.models[this.state.modelIndex];
    return (
      <View>
        <Text>Please choose a make for your car:</Text>
        <PickerIOS
          selectedValue={this.state.carMake}
          onValueChange={(carMake) => this.setState({carMake, modelIndex: 0})}>
          {Object.keys(CAR_MAKES_AND_MODELS).map((carMake) => (
            <PickerItemIOS
              key={carMake}
              value={carMake}
              label={CAR_MAKES_AND_MODELS[carMake].name}
            />
          ))}
        </PickerIOS>
        <Text>Please choose a model of {make.name}:</Text>
        <PickerIOS
          selectedValue={this.state.modelIndex}
          key={this.state.carMake}
          onValueChange={(modelIndex) => this.setState({modelIndex})}>
          {CAR_MAKES_AND_MODELS[this.state.carMake].models.map((modelName, modelIndex) => (
            <PickerItemIOS
              key={this.state.carMake + '_' + modelIndex}
              value={modelIndex}
              label={modelName}
            />
          ))}
        </PickerIOS>
        <Text>You selected: {selectionString}</Text>
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


module.exports = When;
