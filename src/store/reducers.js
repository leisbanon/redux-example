import { combineReducers } from 'redux'

import {
  user,
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


let defaultBook = ['西游记'];
const toBook = (state = defaultBook,action) => {
  // Add Book
  if(action.type == book.addBook) {
    let array = [
      ...state,
      ...[action.text]
    ];
    let set = new Set(array);
    return [...set];
  }

  // Delete Book
  if(action.type == book.deleteBook) {
    let index = state.findIndex((bookname) => bookname == action.text);
    let array = [...state];
    array.splice(index,1);
    return array;
  }
  return state;
}

const reducer = combineReducers({
  toUser,
  toBook,
})

export default reducer;