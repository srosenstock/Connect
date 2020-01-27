/* eslint-disable prettier/prettier */
import React from 'react';
import { View, StyleSheet, Button } from 'react-native';
import { CalendarList } from 'react-native-calendars';

export default class Calendar extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <CalendarList />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
