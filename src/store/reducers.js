import { combineReducers } from 'redux'

import {
  user,
  hotel,
  book,
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

const toBook = (state = {},action) => {
  //action book bookId
  if(action.type == book.bookId) {
    return Object.assign(state,{
      'bookId':action.text
    });
  }

  //action book bookName
  if(action.type == book.bookName) {
    return Object.assign(state,{
      'bookName':action.text
    });
  }

  //action book bookPrice
  if(action.type == book.bookPrice) {
    return Object.assign(state,{
      'bookPrice':action.text
    });
  }

  //action book bookAuthor
  if(action.type == book.bookAuthor) {
    return Object.assign(state,{
      'bookAuthor':action.text
    });
  }

  return state;
}

const reducer = combineReducers({
  toUser,
  toHotel,
  toBook,
})

export default reducer;