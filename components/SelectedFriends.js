/* eslint-disable prettier/prettier */
import React from 'react';
import { StyleSheet, View, Text } from 'react-native';
import { connect } from 'react-redux';
import { selectedFriends } from './store/Friends';



export class SeletedFriends extends React.Component {
  componentDidMount() {
    this.props.selectedFriends();
  }
  render() {
    const allSelectedFriends = this.props.friends.selectedFriends;
    console.log(allSelectedFriends);
    if (allSelectedFriends === null || allSelectedFriends.length === 0) {
      return (
        <View style={styles.friendsContainer}>
          <Text style={styles.header}>Add some friends!</Text>
        </View>
      );
    } else {
      return (
        <View style={styles.friendsContainer}>
          <Text style={styles.header}>Your selected friend(s):</Text>
          <View style={styles.container}>
            {
              allSelectedFriends.map(friend => (
                <View key={friend}>
                  <Text style={styles.friends}>{friend}</Text>
                </View>
              ))
            }
          </View>
        </View>
      );
    }
  }
}


const styles = StyleSheet.create({
  header: {
    fontSize: 20,
    fontFamily: 'AvenirNext-Regular',
  },
  friendsContainer: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  friends: {
    fontSize: 18,
    color: 'teal',
    fontFamily: 'AvenirNext-Regular',
  },
  container: {
    marginTop: 10,
    marginBottom: 10,
  },
});


const mapStateToProps = state => ({
  friends: state.friends,
});

const mapDispatchToProps = dispatch => ({
  selectedFriends: () => dispatch(selectedFriends()),
});

export default connect(mapStateToProps, mapDispatchToProps)(SeletedFriends)
  ;
