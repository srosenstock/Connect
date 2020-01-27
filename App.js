/* eslint-disable prettier/prettier */
import React from 'react';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import Calendar from './components/Calendar';
import Welcome from './components/Welcome';
import CreateEvent from './components/CreateEvent';
import AddFriends from './components/AddFriends'
import { Provider } from 'react-redux'
import store from './components/store/index'
import Event from './components/Event'
import Messages from './components/Messages'

const AppNavigator = createStackNavigator(
  {
    Welcome: Welcome,
    Calendar: Calendar,
    CreateEvent: CreateEvent,
    AddFriends: AddFriends,
    Event: Event,
    Messages: Messages,
  },
  {
    initialRouteName: 'Welcome',
  },
);

const AppContainer = createAppContainer(AppNavigator);

export default class App extends React.Component {
  render() {
    return (
      <Provider store={store}>
        <AppContainer />
      </Provider>
    );
  }
}
