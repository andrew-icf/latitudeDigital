import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  NavigatorIOS,
  TouchableOpacity
} from 'react-native';

export default class NavigatorIOSApp extends Component {
  render() {
    return (
      <NavigatorIOS
        initialRoute={{
          component: latitudeDigital,
          title: 'Show Schedule',
        }}
        style={{flex: 1}}
      />
    );
  }
}

class latitudeDigital extends Component {
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.border}>
          <Text style={styles.text}>
            Training <Text style={styles.date}>09/07/16 - 09/11/16</Text>
          </Text>
        </View>
        <View style={styles.border}>
          <Text style={styles.text}>
            South Florida <Text style={styles.date}>09/10/16 - 09/19/16</Text>
          </Text>
        </View>
        <View style={styles.border}>
          <Text style={styles.text}>
            Texas State Fair <Text style={styles.date}>09/30/16 - 10/24/16</Text>
          </Text>
        </View>
        <View style={styles.border}>
          <Text style={styles.text}>
            Orange County <Text style={styles.date}>10/06/16 - 10/10/16</Text>
          </Text>
        </View>
        <View style={styles.border}>
          <Text style={styles.text}>
            Sacramento <Text style={styles.date}>10/14/16 - 10/17/16</Text>
          </Text>
        </View>
        <View style={styles.border}>
          <Text style={styles.text}>
            San Antonio <Text style={styles.date}>11/10/16 - 11/14/16</Text>
          </Text>
        </View>
        <View style={styles.border}>
          <Text style={styles.text}>
            Seattle <Text style={styles.date}>11/10/16 - 11/14/16</Text>
          </Text>
        </View>
        <View style={styles.border}>
          <Text style={styles.text}>
            Charlotte <Text style={styles.date}>11/17/16 - 11/21/16</Text>
          </Text>
        </View>
        <View style={styles.border}>
          <Text style={styles.text}>
            Nashville <Text style={styles.date}>11/18/16 - 11/21/16</Text>
          </Text>
        </View>
        <View style={styles.border}>
          <Text style={styles.text}>
            Conneticut <Text style={styles.date}>11/18/16 - 11/21/16</Text>
          </Text>
        </View>
        <View style={styles.border}>
          <Text style={styles.text}>
            Los Angeles <Text style={styles.date}>11/18/16 - 11/28/16</Text>
          </Text>
        </View>
        <View style={styles.border}>
          <Text style={styles.text}>
            San Francisco <Text style={styles.date}>11/19/16 - 11/28/16</Text>
          </Text>
        </View>
        <TouchableOpacity onPress={this._onPressButton} style={styles.button}>
          <Text style={styles.buttonText}>Login</Text>
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
    backgroundColor: '#F5FCFF',
  },
  text: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 10,
    marginTop: 10
  },
  date: {
    color: 'hsl(25,41%,54%)',
  },
  border: {
    borderBottomWidth: 1,
    borderBottomColor: '#d6d7da',
    width: 380
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

AppRegistry.registerComponent('latitudeDigital', () => NavigatorIOSApp);
