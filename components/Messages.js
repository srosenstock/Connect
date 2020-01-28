/* eslint-disable prettier/prettier */
import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';


export default class Messages extends React.Component {
  render() {
    return (
      <View>
        <View style={styles.container}>
          <View style={styles.title}>
            <View style={styles.image}>
              <Image source={{ uri: 'https://cdn4.iconfinder.com/data/icons/ios-edge-glyph-12/25/User-Circle-512.png' }}
                style={{ width: 50, height: 50 }} />
            </View>
            <View style={styles.nameContainer}>
              <View style={styles.friendAndMessage}>
                <Text style={styles.name}>Friend 1</Text>
              </View>
              <Text style={styles.message}>Let's hang out!! <Image source={{ uri: 'https://www.pinclipart.com/picdir/middle/359-3599499_drunk-emoji-png-icon-woozy-face-emoji-clipart.png' }}
                style={{ width: 20, height: 20}} /></Text>
            </View>
          </View>
        </View>
        <View style={styles.container}>
          <View style={styles.title}>
            <View style={styles.image}>
              <Image source={{ uri: 'https://cdn4.iconfinder.com/data/icons/ios-edge-glyph-12/25/User-Circle-512.png' }}
                style={{ width: 50, height: 50 }} />
            </View>
            <View style={styles.nameContainer}>
              <View style={styles.friendAndMessage}>
                <Text style={styles.name}>Friend 6</Text>
              </View>
              <Text style={styles.message}>I'll send the pics from last night</Text>
            </View>
          </View>
        </View>
        <View style={styles.container}>
          <View style={styles.title}>
            <View style={styles.image}>
              <Image source={{ uri: 'https://cdn4.iconfinder.com/data/icons/ios-edge-glyph-12/25/User-Circle-512.png' }}
                style={{ width: 50, height: 50 }} />
            </View>
            <View style={styles.nameContainer}>
              <View style={styles.friendAndMessage}>
                <Text style={styles.name}>Friend 3</Text>
              </View>
              <Image source={{ uri: 'https://www.pinclipart.com/picdir/middle/368-3681469_redemoji-red-heart-redheart-emoji-apple-heartemoji-heart.png' }}
                style={{ width: 20, height: 20 }} />
            </View>
          </View>
        </View>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  title: {
    flexDirection: 'row',
  },
  nameContainer: {
    marginTop: 10,
    marginBottom: 10
  },
  name: {
    fontSize: 25,
    fontFamily: 'AvenirNext-Bold',
  },
  message: {
    fontFamily: 'AvenirNext-Regular',
  },
  image: {
    marginLeft: 20,
    marginRight: 20,
    marginTop: 10,
    marginBottom: 10,
  },
  container: {
    borderWidth: 1,
    marginTop: 1,
    marginBottom: 1,
    marginRight: 5,
    marginLeft: 5,
  }
});