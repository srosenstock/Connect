/* eslint-disable prettier/prettier */

//action types
const GET_DATES = 'GET_DATES';
const ALL_DATES = 'ALL_DATES';

//action creators
export const getDates = (dates) => ({ type: GET_DATES, dates });
export const allDates = dates => ({ type: ALL_DATES, dates });

const friend1 = { key: 'friend 1', color: 'red' };
const friend2 = { key: 'friend 2', color: 'orange' };
// const friend3 = { key: 'friend3', color: 'teal' }


let initialState = {
  dates: [{
    '2020-01-25': { dots: [friend1, friend2] },
    '2020-01-26': { dots: [friend2] },
  }],
};


//Reducer
const manageDates = (state = initialState, action) => {
  switch (action.type) {
    case ALL_DATES:
      return action.dates;
    case GET_DATES:
      // if (!initialState.dates[0][action.key]) {
      //   initialState.dates[0][action.key] = action.value;
      // } else {
      //   console.log(action.value.dots[0]);
      //   initialState.dates[0][action.key].dots.push(action.value.dots[0]);
      // }
      // console.log(state);
      // const hi = initialState.dates[0]
      // return {hi};
      // return action.dates
      return {...action.dates}
    default:
      return state;
  }
};


//thunk creator
export const datesAdd = (key, value) => {
  return dispatch => {
    if (!initialState.dates[0][key]) {
      initialState.dates[0][key] = value;
    } else {
      console.log(value.dots[0]);
      initialState.dates[0][key].dots.push(value.dots[0]);
    }

    const dates = initialState.dates[0];
    dispatch(getDates(dates));
  };
};

export const getAllDates = () => {
  return dispatch => {
    console.log(initialState.dates[0]);
    const dates = initialState.dates[0];
    dispatch(allDates(dates));
  };
};


export default manageDates;
