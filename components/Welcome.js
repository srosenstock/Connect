/* eslint-disable prettier/prettier */
import React from 'react';
import { StyleSheet, View, Text, Image, TouchableOpacity } from 'react-native';

export default class Welcome extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.nav}>
          <View style={styles.messageContainer}>
            <TouchableOpacity
              onPress={() => this.props.navigation.navigate('Messages')}>
              <Image source={{ uri: 'https://static.thenounproject.com/png/918394-200.png' }}
                style={{ width: 55, height: 55 }} />
            </TouchableOpacity>
          </View>
          <View style={styles.PlusContainer}>
            <TouchableOpacity
              onPress={() => this.props.navigation.navigate('CreateEvent')}>
              <Text style={styles.plus}>+</Text>
            </TouchableOpacity>
          </View>
        </View>
        <View style={styles.connectContainer}>
          <Text style={styles.connect}>CONNECT</Text>
          <View style={styles.calendar}>
            <TouchableOpacity
              onPress={() => this.props.navigation.navigate('Calendar')}>
              <Text style={styles.calendar}>View Calendar</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  connectContainer: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  connect: {
    color: 'white',
    fontSize: 60,
    fontFamily: 'Courier',
    textDecorationLine: 'underline',
  },
  calendar: {
    color: 'white',
    marginTop: 50,
    marginBottom: 300,
    fontFamily: 'AvenirNext-Regular',
    fontSize: 20,
  },
  container: {
    backgroundColor: 'teal',
  },
  nav: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  PlusContainer: {
    margin: 20,
    marginBottom: 200,
  },
  plus: {
    fontSize: 100,
    fontFamily: 'AvenirNext-UltraLight',
  },
  messageContainer: {
    margin: 20,
    marginTop: 70,
    marginLeft: 35,
    marginBottom: 200,
  },
});
