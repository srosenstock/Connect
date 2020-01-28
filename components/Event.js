/* eslint-disable prettier/prettier */
import React from 'react';
import { View, TouchableOpacity, Text, Button, Alert } from 'react-native';
import { selectedFriends } from './store/Friends';
import { connect } from 'react-redux';
import SelectedFriends from '../components/SelectedFriends';
import { CalendarList } from 'react-native-calendars';
import { datesAdd, getAllDates } from '../components/store/Dates';



export class Event extends React.Component {
  componentDidMount() {
    this.props.getAllDates();
    this.props.selectedFriends();
  }

  render() {
    const friend3 = { key: 'friend3', color: 'teal' };
    const date = this.props.dates;

    const people = this.props.friends.selectedFriends.length + 1
    const dates = this.props.dates;
    let arr = [];
    let answer;
    Object.keys(dates).map(orders => (
      Object.keys(dates[orders]).map(day => (
        arr.push(dates[orders][day].length)
      ))
    ));
    if (arr.includes(people)) {
      answer = 'Yes!!!';
    } else {
      answer = 'Nopee:(';
    }

    return (
      <View>
        <SelectedFriends />
        <Button
          title='Check'
          onPress={() => Alert.alert(answer)} />
        <CalendarList
          markedDates={date}
          markingType={'multi-dot'}
          onDayPress={(day) => this.props.datesAdd((day.dateString), ({ dots: [friend3] }))}
        />
        {
        }
      </View>
    );
  }
}




const mapStateToProps = state => ({
  friends: state.friends,
  dates: state.dates,
});

const mapDispatchToProps = dispatch => ({
  getAllDates: () => dispatch(getAllDates()),
  selectedFriends: () => dispatch(selectedFriends()),
  datesAdd: (key, value) => dispatch(datesAdd(key, value)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Event);
