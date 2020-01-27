/* eslint-disable prettier/prettier */
import React from 'react';
import { StyleSheet, View, Text, Button, TouchableOpacity } from 'react-native';
import { connect } from 'react-redux';
import { gettingFriends, gettingSelectedFriends, selectedFriends } from './store/Friends';


export class AddFriends extends React.Component {
  componentDidMount() {
    this.props.gettingFriends();
    this.props.selectedFriends();
  }
  render() {
    const friends = this.props.friends.friends;
    return (
      <View style={styles.container}>
        <Text style={styles.select}>Select:</Text>
        {friends.map(friend => (
          <View key={friend}>
            <TouchableOpacity
              onPress={() => this.props.gettingSelectedFriends(friend)}>
              <Text style={styles.friends}>{friend}</Text>
            </TouchableOpacity>
          </View>
        ))}
        <View style={styles.doneContainer}>
          <TouchableOpacity
            onPress={() => this.props.navigation.navigate('Event')}>
            <Text style={styles.done}>Done</Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
  },
  select: {
    fontSize: 30,
    textDecorationLine: 'underline',
    marginBottom: 10,
    fontFamily: 'AvenirNext-Regular',
  },
  friends: {
    fontSize: 18,
    fontFamily: 'AvenirNext-Regular',
  },
  done: {
    borderWidth: 2,
    borderColor: '#49b2e3',
    color: 'white',
    backgroundColor: '#49b2e3',
    paddingEnd: 150,
    paddingStart: 150,
    fontSize: 30,
    textAlign: 'center',
    margin: 10,
    fontFamily: 'AvenirNext-Regular',
  },
});


const mapStateToProps = state => ({
  friends: state.friends,
});

const mapDispatchToProps = dispatch => ({
  gettingFriends: () => dispatch(gettingFriends()),
  gettingSelectedFriends: (friend) => dispatch(gettingSelectedFriends(friend)),
  selectedFriends: () => dispatch(selectedFriends()),
});

export default connect(mapStateToProps, mapDispatchToProps)(AddFriends);
