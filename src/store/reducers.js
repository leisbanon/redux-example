import { combineReducers } from 'redux'

import { 
  user,
  hotel,
} from './action'

const toUser = (state='',action) => {
  // console.log(action);
  switch(action.type) {
    case user.userId:       //用户ID
      return action.text
    case user.userName:     //用户名
      return action.text
    case user.userEmail:    //邮箱
      console.log(state);
      // console.log(action);
      return action.text
    case user.userAddress: //地址
      return action.text
    default:
      return state;
  }
}


const toHotel = (state='',action) => {
  switch(action.type) {
    case hotel.roomId:
      return action.text
    case hotel.roomNumber:
      return action.text
    default:
      return state;
  }
}

const reducer = combineReducers({
  toUser,
  toHotel,
})

export default reducer;