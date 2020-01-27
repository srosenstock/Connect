/* eslint-disable prettier/prettier */

//action types
const GET_FRIENDS = 'GET_FRIENDS';
const SELECTING_FRIENDS = 'SELECTING_FRIENDS'
const SELECTED_FRIENDS = 'SELECTED_FRIENDS'

//action creators
export const getFriends = friends => ({ type: GET_FRIENDS, friends });
export const getSelectedFriends = friends => ({ type: SELECTING_FRIENDS, friends });
export const getAllSelectFriends = friends => ({ type: SELECTED_FRIENDS, friends })


let initialState = {
  friends: ['Friend 1', 'Friend 2', 'Friend 3', 'Friend 4', 'Friend 5', 'Friend 6', 'Friend 7'],
  selectedFriends: []
};

//Reducer
const manageFriends = (state = initialState, action) => {
  switch (action.type) {
    case GET_FRIENDS:
      return state;
    case SELECTING_FRIENDS:
      return state;
    case SELECTED_FRIENDS:
      return state;
    default:
      return state;
  }
}


//thunk creator
export const gettingFriends = () => {
  return dispatch => {
    const result = initialState.friends;
    dispatch(getFriends(result));
  };
};

export const gettingSelectedFriends = (friend) => {
  return dispatch => {
    initialState.selectedFriends.push(friend);
    const result = initialState.selectedFriends;
    dispatch(getSelectedFriends(result));
  };
};

export const selectedFriends = () => {
  return dispatch => {
    const result = initialState.selectedFriends;
    dispatch(getAllSelectFriends(result));
  };
};


export default manageFriends;