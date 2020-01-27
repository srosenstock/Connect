/* eslint-disable prettier/prettier */

//action types
const GET_DATES = 'GET_DATES';
const ALL_DATES = 'ALL_DATES'

//action creators
export const getDates = dates => ({ type: GET_DATES, dates });
export const allDates = dates => ({ type: ALL_DATES, dates })

const friend1 = { key: 'friend 1', color: 'red' };
const friend2 = { key: 'friend 2', color: 'orange' };
const friend3 = { key: 'friend 3', color: 'green' };

let initialState = {
  // dates: [{
  //   '2020-01-25': { dots: [friend1, friend2, friend3] },
  //   '2020-01-26': { dots: [friend2, friend3] }
  // }],
  dates: ['hi']
};


//Reducer
const manageDates = (state = initialState, action) => {
  switch (action.type) {
    case ALL_DATES:
      return state;
    case GET_DATES:
      return state;
    default:
      return state;
  }
};


//thunk creator
export const datesAdd = (date) => {
  return dispatch => {
    initialState.dates += date;
    const result = initialState.dates;
    dispatch(getDates(result));
  };
};

export const getAllDates = () => {
  return dispatch => {
    const result = initialState.dates;
    dispatch(allDates(result));
  };
};


export default manageDates;
