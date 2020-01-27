/* eslint-disable prettier/prettier */
import React from 'react';
import { StyleSheet, View, Text, TouchableOpacity } from 'react-native';
import { selectedFriends } from './store/Friends';
import { connect } from 'react-redux';
import SelectedFriends from '../components/SelectedFriends'
import { CalendarList } from 'react-native-calendars';
import { datesAdd, getAllDates } from '../components/store/Dates'



export class Event extends React.Component {
  componentDidMount() {
    this.props.getAllDates()
    this.props.selectedFriends();
  }
  render() {

    const date = this.props
    return (
      <View>
        <SelectedFriends />
        <CalendarList
          markedDates={this.props}
          markingType={'multi-dot'}
        // onDayPress={(day) => this.props.datesAdd((`${day.year}-${day.day}-${day.month}`: { dots: [friend2, friend3]})) }
        />
        {
          console.log('date', date)
          // Calendar.onDayPress={(day) => { date = (`${day.year}-${day.day}-${day.month}`))}}
          // CalendarList.markedDates.push({'2020-01-27': { dots: [friend2, friend3]}})
          // console.log(CalendarList.markedDates)
          // console.log('dates', dates)
        }
      </View>
    );
  }
}




const mapStateToProps = state => ({
  friends: state.friends,
  dates: state.date
});

const mapDispatchToProps = dispatch => ({
  getAllDates: () => dispatch(getAllDates()),
  selectedFriends: () => dispatch(selectedFriends()),
  datesAdd: (date) => dispatch(datesAdd(date)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Event);
