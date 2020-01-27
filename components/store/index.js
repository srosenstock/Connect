/* eslint-disable prettier/prettier */
import { createStore, applyMiddleware, combineReducers } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension'
import axios from 'axios'
import manageFriends from '../store/Friends'
import manageDates from '../store/Dates'
import loggingMiddleware from 'redux-logger' // https://github.com/evgenyrodionov/redux-logger
import thunkMiddleware from 'redux-thunk' // https://github.com/gaearon/redux-thunk

const reducers = combineReducers({ friends: manageFriends, dates: manageDates })
const store = createStore(
    reducers,
    composeWithDevTools(applyMiddleware(
        // `withExtraArgument` gives us access to axios in our async action creators!
        // https://github.com/reduxjs/redux-thunk#injecting-a-custom-argument
        thunkMiddleware.withExtraArgument({ axios }),
        loggingMiddleware
    ))
)

export default store