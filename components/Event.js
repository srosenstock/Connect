/* eslint-disable prettier/prettier */
import React from 'react';
import { View } from 'react-native';
import { selectedFriends } from './store/Friends';
import { connect } from 'react-redux';
import SelectedFriends from '../components/SelectedFriends'
import { CalendarList } from 'react-native-calendars';
import { datesAdd, getAllDates } from '../components/store/Dates'



export class Event extends React.Component {
  componentDidMount() {
    this.props.getAllDates();
    this.props.selectedFriends();
  }

  render() {

    const friend3 = {key: 'friend3', color: 'teal'}

    const date = this.props.dates
    return (
      <View>
        <SelectedFriends />
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
