import * as types from '../Constants/ActionType';
import * as messages from '../Constants/Message';

//Lưu trên localstorage
var initialstate = messages.MSG_WELCOME;

const message = (state = initialstate, action) => {   
    switch (action.type) {
      case types.CHANGE_MESSAGE:       
        return action.message;
      default:
        return [...state];
  
    }
  }
  
  export default message;