/* eslint-disable prettier/prettier */
import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';


export default class CreateEvent extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.event}>Create an event!</Text>
        <TouchableOpacity
          onPress={() => this.props.navigation.navigate('AddFriends')}>
          <Text style={styles.friends}>Add Friends</Text>
        </TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    margin: 20,
    marginBottom: 200,
    alignItems: 'center',
  },
  event: {
    fontSize: 25,
    fontFamily: 'AvenirNext-Regular',
    textDecorationLine: 'underline'
  },
  friends: {
    fontSize: 15,
    fontFamily: 'AvenirNext-Regular',
    marginTop: 20
  }
});

