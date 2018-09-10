import { combineReducers } from 'redux'

import {
  user,
  hotel,
} from './action'

const toUser = (state={},action) => {
  // Action user.userId
  if(action.type == user.userId) {
      return Object.assign(state,{
        'userID':action.text
      });
  }

  // Action user.userId
  if(action.type == user.userName) {
    return Object.assign(state,{
      'userName':action.text
    });
  }

  return state;
}


const toHotel = (state={},action) => {
  // Action hotel.roomId
  if(action.type == hotel.roomId) {
    return Object.assign(state,{
      'roomId':action.text
    });
  }

  //Action hotel.roomNumber
  if(action.type == hotel.roomNumber) {
    return Object.assign(state,{
      'roomNumber':action.text
    });
  }

  return state;
}

const reducer = combineReducers({
  toUser,
  toHotel,
})

export default reducer;